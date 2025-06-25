import express from 'express';
import cors from 'cors';
import pkg from 'pg';
import multer from 'multer';
import xlsx from 'xlsx';

const { Pool } = pkg;

// Configura tus credenciales de PostgreSQL aquí
const pool = new Pool({
  user: 'postgres', // Cambia por tu usuario
  host: 'localhost',
  database: 'scuni', // Cambia por tu base de datos
  password: 'zapatin04', // Cambia por tu contraseña
  port: 5432,
});

// Prueba de conexión al iniciar el servidor
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error de conexión a PostgreSQL:', err);
  } else {
    console.log('Conexión exitosa a PostgreSQL:', res.rows);
  }
});

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Configuración de multer para archivos temporales en memoria
const upload = multer({ storage: multer.memoryStorage() });

// Ruta de prueba para login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  // Intentar conectar con los datos recibidos
  const testPool = new Pool({
    user: username,
    host: 'localhost',
    database: 'scuni',
    password: password,
    port: 5432,
  });
  try {
    await testPool.query('SELECT 1');
    await testPool.end();
    return res.json({ success: true, user: { username } });
  } catch (err) {
    console.error('Error de autenticación PostgreSQL:', err);
    return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
  }
});

// Endpoint para procesar Excel y registrar todos los receptores
app.post('/api/upload-excel', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se envió ningún archivo' });
  }
  try {
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
    // data es un array de arrays (filas)
    const headers = data[0];
    const rows = data.slice(1);
    const folios = [];
    for (const persona of rows) {
      // persona: [nombre, primer_apellido, segundo_apellido, teléfono, email, grado_academico]
      console.log('Intentando registrar persona:', persona);
      try {
        const result = await pool.query(
          `INSERT INTO receptor (nombre, primer_apellido, segundo_apellido, "teléfono", email, grado_academico)
           VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_receptor`,
          [persona[0], persona[1], persona[2], persona[3] || '', persona[4] || '', persona[5] || '']
        );
        folios.push({ nombre: persona[0], folio: result.rows[0].id_receptor });
      } catch (err) {
        console.error('Error registrando receptor:', err);
        folios.push({ nombre: persona[0], error: err.message });
      }
    }
    res.json({ folios });
  } catch (err) {
    console.error('Error procesando el archivo Excel:', err);
    res.status(500).json({ error: 'Error procesando el archivo Excel', details: err.message });
  }
});

// Endpoint para registrar receptor y devolver folio
app.post('/api/registrar-receptor', async (req, res) => {
  console.log('Datos recibidos para registrar receptor:', req.body);
  const { nombre, primer_apellido, segundo_apellido, telefono, email, grado_academico } = req.body;
  try {
    // Insertar receptor y devolver el id_receptor (serial)
    const result = await pool.query(
      `INSERT INTO receptor (nombre, primer_apellido, segundo_apellido, "teléfono", email, grado_academico)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_receptor`,
      [nombre, primer_apellido, segundo_apellido, telefono, email, grado_academico]
    );
    const folio = result.rows[0].id_receptor;
    res.json({ folio });
  } catch (err) {
    console.error('Error registrando receptor:', err);
    res.status(500).json({ error: 'Error registrando receptor', details: err.message });
  }
});

// Ruta de prueba para registrar un receptor manualmente
app.get('/registro-prueba', async (req, res) => {
  try {
    const result = await pool.query(
      `INSERT INTO receptor (nombre, primer_apellido, segundo_apellido, "teléfono", email, grado_academico)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      ['Prueba', 'Apellido1', 'Apellido2', '1234567890', 'prueba@email.com', 'Lic.']
    );
    res.json({ success: true, receptor: result.rows[0] });
  } catch (err) {
    console.error('Error en registro de prueba:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});
