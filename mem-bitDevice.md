# Arquitectura de Sincronización y bitDevices

## 1. Autorización de Dispositivos (Opt-In)
El control de la sincronización es explícito y reside en el usuario. Un dispositivo vinculado no tiene acceso a los datos de bitChat por defecto.

### Niveles de Autorización:
- **Global:** En `Configuración de bitChat`, un interruptor (switch) permite autorizar una terminal para **todos** los contactos actuales. Al activarlo, se solicita confirmación al usuario para mayor seguridad.
- **Por Chat:** En la configuración individual de cada chat, se puede autorizar o revocar el acceso de terminales específicas a esa conversación en particular.

## 2. Descubrimiento de Red Proactivo
- El sistema mantiene conexiones de fondo **solo** con aquellas terminales que tienen permiso de sincronización en al menos un chat.
- El descubrimiento exhaustivo de todas las terminales (autorizadas o no) se realiza únicamente de forma manual cuando el usuario pulsa "Buscar Dispositivos" en la app `bitDevices`.

## 3. Flujo de Sincronización Bidireccional
La sincronización garantiza que todos los nodos autorizados tengan el historial completo.

- **Al Abrir un Chat:** Se envía una petición de sincronización (`SYNC_REQUEST`) a todas las terminales autorizadas y al contacto directamente (si está online).
- **Al Enviar un Mensaje:** El mensaje se envía al contacto y se replica instantáneamente a todas las terminales autorizadas conectadas.
- **Al Recibir un Mensaje:** El mensaje se guarda localmente y se replica a todas las terminales autorizadas conectadas.

## 4. Seguridad y Privacidad
- Las terminales utilizan un túnel **E2EE** propio para intercambiar mensajes y secretos de chat (`sharedSecret`), asegurando que solo tus dispositivos autorizados puedan leer el historial replicado.
- La desvinculación de un dispositivo en `bitDevices` revoca inmediatamente su capacidad de recibir nuevas replicaciones.
