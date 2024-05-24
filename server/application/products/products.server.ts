export async function getProducts() {
  return [
    {
      id: "0",
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      tags: ["tradicional"],
      price: 9.90,
      image: "/images/coffees/expresso.png"
    },
    {
      id: "1",
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      tags: ["tradicional"],
      price: 10.90,
      image: "/images/coffees/americano.png"
    },
    {
      id: "2",
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      tags: ["tradicional"],
      price: 10.90,
      image: "/images/coffees/expresso-cremoso.png"
    },
    {
      id: "3",
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      tags: ["tradicional", "gelado"],
      price: 10.90,
      image: "/images/coffees/cafe-gelado.png"
    },
    {
      id: "4",
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      tags: ["tradicional", "com leite"],
      price: 12.90,
      image: "/images/coffees/cafe-com-leite.png"
    },
    {
      id: "5",
      title: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      tags: ["tradicional", "com leite"],
      price: 13.90,
      image: "/images/coffees/latte.png"
    },
    {
      id: "6",
      title: "Capuccino",
      description: "Bebida com canela feita de doses iguais de café, leite e espuma",
      tags: ["tradicional", "com leite"],
      price: 9.90,
      image: "/images/coffees/capuccino.png"
    },
    {
      id: "7",
      title: "Macchiato",
      description: "Café expresso misturado com um pouco de leite quente e espuma",
      tags: ["tradicional", "com leite"],
      price: 15,
      image: "/images/coffees/macchiato.png"
    },
    {
      id: "8",
      title: "Mocaccino",
      description: "Café expresso misturado com um pouco de leite quente e espuma",
      tags: ["tradicional", "com leite"],
      price: 9.90,
      image: "/images/coffees/mocaccino.png"
    },
    {
      id: "9",
      title: "Chocolate Quente",
      description: "Bebida feita com chocolate dissolvido no leite quente e café",
      tags: ["especial", "com leite"],
      price: 16.50,
      image: "/images/coffees/chocolate-quente.png"
    },
    {
      id: "10",
      title: "Cubano",
      description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
      tags: ["especial", "alcoólico", "gelado"],
      price: 9.90,
      image: "/images/coffees/cubano.png"
    },
    {
      id: "11",
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      tags: ["especial"],
      price: 9.90,
      image: "/images/coffees/havaiano.png"
    },
    {
      id: "12",
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      tags: ["especial"],
      price: 9.90,
      image: "/images/coffees/arabe.png"
    },
    {
      id: "13",
      title: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      tags: ["especial", "alcoólico"],
      price: 9.95,
      image: "/images/coffees/irlandes.png"
    }
  ]
}

// método de conexão com banco
