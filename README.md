# APIMercadoPago

JS con Express 

- Axios para las requests 
- Dotenv para proteger nuestra api key

Implementacion pagos únicos y pagos recurring

Comentario:

Cómo no tenemos vista y lo que hacemos es devolver un JSON lo importante de ese punto es entender que MP nos devuelve un init point que es literal el link de pago y es lo que tenemos que devolverle al front

Y por otro lado un sandbox init point, ese no hay que usarlo nunca, es viejo 