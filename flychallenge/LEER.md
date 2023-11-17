## Datos:

Alumno: Tomas Viñuela
Año: 2023
Profesor: Ernesto Ledesma

## Aclaraciones

La aplicacion recibe al usuario con una pantalla en la cual se encuentran todos los posibles origenes (basandose en la base de datos proporcionada). Al hacer click en una de estas opciones, se transporta al usuario a otra pagina en la cual se le proporciona una lista de opciones, la cual esta predeterminadamente ordenada de menor a mayor precio pero que puede ordenarse de distinta forma haciendo click en los titulos de las columnas "dias" y "precio" de la tabla. Esta pantalla solo mostrara 50 elementos y, para cargar mas, se debe presionar el boton que se encuentra al final de esta.
Los datos de esta segunda pagina funcionan de forma que:
- el precio es el precio total del viaje (es decir, la ida y la vuelta)
- solo se mostraran las opciones que cumplan con los requisitos del challenge (es decir, tengan un precio ida y vuelta menor a 800)
- no se mostraran viajes en los que la ida o la vuelta cuenten con availability=0, ya que esto significaria que no hay lugar
- tampoco se mostraran viajes con fechas imposibles (ej: saliendo en junio y volviendo en abril del mismo año)

Otras notas a tener en cuenta:
- hacer click en flybondi! lleva al usuario devuelta a la pagina principal
- hacer click en el nombre del autor (final de la pagina) lleva al usuario al repositorio GitHub del autor

## Errores encontrados

Por alguna razon, a pesar de estar programada de forma correcta y no tirar errores, la aplicacion no muestra las paginas con la lista de viajes posibles, mostrando en su lugar un Error 404. Trate de arreglar este problema de varias formas pero me fue imposible ya que todo parece correr bien. Intuyo que el problema recae en la version de alguna de mis dependencias, ya que esto de tener un Error 404 por mas que este bien programado me paso en los TP anteriores.

