Para esta estructura he decidido crear tres collections. 

En la de restaurant he puesto el address embedded en un objeto mientra para los employees, he creado un array
de objectos donde irán todos ellos. Aunque el enunciado nos pedía de crear tablas diferentes para localidades
y provincias, para un modelo no relación he preferido embedearlas en restaurante y en clientes

En la collection de clientes he referenciado los ordenes en el array orders y preferido hacer así en lugar 
de embedear los clientes en la tabla de órdenes porque creo que es más optimo tener una tabla separada con todos
los clientes.

Para luego saber quien es el empleado que hace delivery y el restaurante que prepara el pedido, he referenciado los dos IDs 
en la tabla de orders. Para los detalles de los productos he creado un array de objetos: 1 obj para food y quantity,
uno para drink y quantity y otro para el precio total. En caso de que un cliente pida una pizza se añade el campo
categoría en el objeto con el campo food.