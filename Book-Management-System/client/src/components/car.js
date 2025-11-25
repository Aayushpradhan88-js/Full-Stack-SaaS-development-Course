import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    const products = [
        {
            id: 1,
            image: "https://rukminim1.flixcart.com/image/850/1000/l3929ow0/regionalbooks/b/a/f/shreemad-bhagwat-geeta-original-imageeufsk4ds57y.jpeg?q=90",
            title: "Shreemad Bhagwat Geeta",
            rating: 3,
            price: "$599"
        },
        {
            id: 2,
            image: "https://5.imimg.com/data5/SELLER/Default/2022/3/QD/IO/OA/29351946/71-7k19gktl-500x500.jpg",
            title: "Psychology of Money",
            rating: 3,
            price: "$599"
        },
        {
            id: 3,
            image: "https://cdn2.penguin.com.au/covers/original/9781593279509.jpg",
            title: "Eloquent JavaScript",
            rating: 3,
            price: "$599"
        },
        {
            id: 4,
            image: "https://tse4.mm.bing.net/th/id/OIP.6by501tyhR1lW498nlg9tAHaGI?rs=1&pid=ImgDetMain",
            title: "Design Patterns Book",
            rating: 3,
            price: "$599"
        },
        {
            id: 5,
            image: "https://m.media-amazon.com/images/I/81vAYm-YCxL._SL1500_.jpg",
            title: "Clean Code",
            rating: 3,
            price: "$599"
        },
        {
            id: 6,
            image: "https://tse3.mm.bing.net/th/id/OIP.qzqL6KT4VmDor7SCZ3YtFgHaEK?rs=1&pid=ImgDetMain",
            title: "Programming Concepts",
            rating: 3,
            price: "$599"
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
                <Link to="/singlepage" key={product.id}>
                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
                        <img 
                            className="p-8 rounded-t-lg w-full h-64 object-contain" 
                            src={product.image} 
                            alt="product image" 
                        />
                        <div className="px-5 pb-5">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                                {product.title}
                            </h5>
                            <div className="flex items-center mt-2.5 mb-5">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    {[...Array(4)].map((_, i) => (
                                        <svg 
                                            key={i}
                                            className={`w-4 h-4 ${i < product.rating ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`}
                                            aria-hidden="true" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            fill="currentColor" 
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                                    {product.rating}.0
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {product.price}
                                </span>
                                <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Card;