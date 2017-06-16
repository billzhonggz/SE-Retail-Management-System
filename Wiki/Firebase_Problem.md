# Firebase 2017/6/5

### Problems

- We cannot understand the nested data structures and flat data structures clearly at first. Between Firebase and MySQL, Firebase uses Jason tree to construct data structures which is instead of table list of MySQL. So it has to face two problems:

  - If we use nested data structures, it will be more logical, but it is redundant. 


  - If we use flat data structures, it can reduce the deep of tree, but some of data will be repeated.

- When we build up the structure of commodity, Allen think it need to follow the standard of structure of Jason tree. In commodity structure, each of commodity should have a "name", "category", "unit", "unit price", "amount", "state". Every attribute should be built up in flat data structures. But Bill thinks that in our project, it doesn't have a deep structure, so we can use nested data structures. At last, we separate category from commodity as a single database which records different commodities in different categories. And in orders, we decides to use nested to build up Jason tree more efficiently.