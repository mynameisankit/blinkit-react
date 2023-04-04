const products = {
    "fig": {
        "productId": "fig",
        "categoryId": ["exotics"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/10186a.jpg",
        "name": "Fig",
        "quantities": ["1 kg"],
        "offeredPrice": "140",
        "actualPrice": "182"
    },
    "lemongrass": {
        "productId": "lemongrass",
        "categoryId": ["exotics"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/5855a.jpg?ts=1628170274",
        "name": "Lemongrass",
        "quantities": ["1 kg"],
        "offeredPrice": "30",
        "actualPrice": "36"
    },
    "lettuce": {
        "productId": "lettuce",
        "categoryId": ["exotics"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/344275a.jpg",
        "name": "Lettuce",
        "quantities": ["1 kg"],
        "offeredPrice": "59",
        "actualPrice": "69"
    },
    "strawberry": {
        "productId": "strawberry",
        "categoryId": ["exotics"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/439703a.jpg?ts=1671081846",
        "name": "Strawberry",
        "quantities": ["1 kg", "2 Kg"],
        "offeredPrice": "84",
        "actualPrice": "97"
    },
    "apple": {
        "productId": "apple",
        "categoryId": ["fruits"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/428612a.jpg?ts=1658731563",
        "name": "Apple",
        "quantities": ["1 kg"],
        "offeredPrice": "140",
        "actualPrice": "182"
    },
    "banana": {
        "productId": "banana",
        "categoryId": ["fruits"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/88275a.jpg?ts=1610741740",
        "name": "Carrot",
        "quantities": ["1 kg"],
        "offeredPrice": "30",
        "actualPrice": "36"
    },
    "coconut": {
        "productId": "coconut",
        "categoryId": ["fruits"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/352443a.jpg?ts=1671176100",
        "name": "Coconut",
        "quantities": ["1 kg"],
        "offeredPrice": "59",
        "actualPrice": "69"
    },
    "papaya": {
        "productId": "papaya",
        "categoryId": ["fruits"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/189821a.jpg?ts=1641274077",
        "name": "Ginger",
        "quantities": ["1 kg", "2 Kg"],
        "offeredPrice": "84",
        "actualPrice": "97"
    },
    "beetroot": {
        "productId": "beetroot",
        "categoryId": ["organic"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/467637a.jpg?ts=1673944535",
        "name": "Beetroot",
        "quantities": ["1 kg"],
        "offeredPrice": "140",
        "actualPrice": "182"
    },
    "brinjal": {
        "productId": "brinjal",
        "categoryId": ["organic"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/477160a.jpg?ts=1636527086",
        "name": "Brinjal",
        "quantities": ["1 kg"],
        "offeredPrice": "30",
        "actualPrice": "36"
    },
    "okra": {
        "productId": "okra",
        "categoryId": ["organic", "vegetables"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/467653a.jpg?ts=1673945224",
        "name": "Bhindi",
        "quantities": ["1 kg"],
        "offeredPrice": "59",
        "actualPrice": "69"
    },
    "spinach": {
        "productId": "spinach",
        "categoryId": ["organic", "seasonal", "sprouts"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/3918a.jpg?ts=1610741579",
        "name": "Spinach",
        "quantities": ["1 kg", "2 Kg"],
        "offeredPrice": "84",
        "actualPrice": "97"
    },
    "Brocolli": {
        "productId": "Brocolli",
        "categoryId": ["seasonal"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/369742a.jpg?ts=1639905261",
        "name": "Brocolli",
        "quantities": ["1 kg"],
        "offeredPrice": "140",
        "actualPrice": "182"
    },
    "cauliflower": {
        "productId": "cauliflower",
        "categoryId": ["seasonal"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/327316a.jpg?ts=1639905261",
        "name": "Cauliflower",
        "quantities": ["1 kg"],
        "offeredPrice": "30",
        "actualPrice": "36"
    },
    "grapes": {
        "productId": "grapes",
        "categoryId": ["seasonal"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/347025a.jpg?ts=1652855625",
        "name": "Grapes",
        "quantities": ["1 kg"],
        "offeredPrice": "59",
        "actualPrice": "69"
    },
    "corn": {
        "productId": "corn",
        "categoryId": ["sprouts"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/23379a.jpg?ts=1648018113",
        "name": "Corn",
        "quantities": ["1 kg"],
        "offeredPrice": "140",
        "actualPrice": "182"
    },
    "garlic": {
        "productId": "garlic",
        "categoryId": ["sprouts"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/467673a.jpg?ts=1651473501",
        "name": "Garlic",
        "quantities": ["1 kg"],
        "offeredPrice": "30",
        "actualPrice": "36"
    },
    "matki": {
        "productId": "matki",
        "categoryId": ["sprouts"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/327209a.jpg",
        "name": "Matki",
        "quantities": ["1 kg"],
        "offeredPrice": "59",
        "actualPrice": "69"
    },
    "potato": {
        "productId": "potato",
        "categoryId": ["vegetables"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/391305a.jpg",
        "name": "Potato (Batata)",
        "quantities": ["1 kg"],
        "offeredPrice": "15",
        "actualPrice": "20"
    },
    "carrot": {
        "productId": "carrot",
        "categoryId": ["vegetables"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/332740a.jpg?ts=1642139871",
        "name": "Carrot",
        "quantities": ["1 kg"],
        "offeredPrice": "17",
        "actualPrice": "19"
    },
    "capsicum": {
        "productId": "capsicum",
        "categoryId": ["vegetables"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/3888a.jpg?ts=1671620196",
        "name": "Capsicum",
        "quantities": ["1 kg"],
        "offeredPrice": "55",
        "actualPrice": "69"
    },
    "ginger": {
        "productId": "ginger",
        "categoryId": ["vegetables"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/421703a.jpg?ts=1639905261",
        "name": "Ginger",
        "quantities": ["1 kg", "2 Kg"],
        "offeredPrice": "37",
        "actualPrice": "47"
    },
    "onion": {
        "productId": "onion",
        "categoryId": ["vegetables"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/391306a.jpg?ts=1652789363",
        "name": "Onion",
        "quantities": ["1 kg", "2 Kg", "3 Kg"],
        "offeredPrice": "32",
        "actualPrice": "41"
    },
    "tomato": {
        "productId": "tomato",
        "categoryId": ["vegetables"],
        "offer": "15",
        "sourcedAt": "5 A.M.",
        "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/3881a.jpg?ts=1671620195",
        "name": "Tomato",
        "quantities": ["1 kg"],
        "offeredPrice": "15",
        "actualPrice": "19"
    }
};

export default products;