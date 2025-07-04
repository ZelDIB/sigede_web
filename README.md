# SIGEDE – Sistema de Gestión de Credenciales

SIGEDE es una solución completa desarrollada para facilitar la creación, personalización y generación de credenciales institucionales.  
Fue construida como un proyecto universitario aplicado, con enfoque tanto en desarrollo frontend/backend como en prácticas de **DevOps modernas**.

---

## 🚀 Características principales

- 🧾 Creación de formularios personalizados por institución
- 🎨 Editor visual de plantillas de credenciales
- 👥 Gestión de usuarios por roles
- 📄 Generación automática de credenciales en **PDF con QR**
- 📦 Despliegue automatizado con **Jenkins + Docker**
- ☁️ Implementación sobre instancias **AWS EC2**

---

## 🛠️ Tecnologías utilizadas

### Frontend
- [Nuxt 3](https://nuxt.com/)
- Vue.js
- BulmaCSS
- Cluodinary

### DevOps / Infraestructura
- Docker + Docker Compose (contenedor para frontend)
- Jenkins (pipeline de CI/CD)
- Git y GitHub
- AWS EC2 (ambientes de pruebas y producción)
- SSH y entorno Linux

---

## 📦 Instalación local (modo desarrollador)

```bash
# Clona el repositorio
git clone https://github.com/ZelDIB/sigede_web.git
cd sigede-web

# Instala dependencias
npm install

# Inicia el servidor
npm run dev

🐳 Despliegue con Docker
Modo local (independiente)

# Construye y ejecuta la app en contenedor
docker build -t sigede_web .
docker run -p 3000:3000 sigede_web
