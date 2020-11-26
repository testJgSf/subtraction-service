
# Subtraction Service  
  
## Configuración inicial del proyecto  
  
### Sin Docker  
- Se require tener instalado nodeJs v12.13.0  
- Instalar dependencias con `npm i`  
- Ejecutar el comando `npm start`  
  
### Con Docker 

- Construir imagen con el comando `docker build -t joseg/subtraction-service-1.0.0 .`  
- Asignar el tag que se desee utilizar, para este ejemplo es "joseg/subtraction-service-1.0.0"  
- Verificar que la imagen se haya construido con el comando `docker images`  
- De aparecer la imagen creada ejecutar `docker run -p 3003:3003 -d joseg/subtraction-service-1.0.0`  
  
  **NOTA**:**Por defecto la cantidad máxima de decimales para la salida es de 5 decimales, si se desea mas es necesario agregar una variable de ambiente de nombre DECIMALS con valor entero explicando la cantidad de decimales que se quiere manejar**
  
## Contratos  
  
- subtraction  [Servicio de resta OpenApi 3.0](https://app.swaggerhub.com/apis-docs/test_jg_sf/subtraction-service/1.0.0)  
  
  
## Documentación adicional  
  
El resto de la documentación puede ser encontrada en el siguiente enlace [Documentación](https://github.com/testJgSf/calculator-documentation)

  
### Más información  
Cualquier información extra contacte a José Gabriel Ortiz.