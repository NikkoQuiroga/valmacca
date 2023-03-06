const products = [
    {
      id: 1,
      name: 'Taza de cerámica blanca',
      stock: 10,
      category: 'tazas',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jarrón de cerámica azul',
      stock: 5,
      category: 'jarrones',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Plato de cerámica verde',
      stock: 7,
      category: 'platos',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Maceta de cerámica negra',
      stock: 3,
      category: 'macetas',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Taza de cerámica negra',
      stock: 12,
      category: 'tazas',
      image: 'https://via.placeholder.com/150',
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };