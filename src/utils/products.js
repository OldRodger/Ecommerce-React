// JACKETS
import jacket_1 from '../assets/products/jackets/jacket-1.webp'
import jacket_2 from '../assets/products/jackets/jacket-2.webp'
import jacket_3 from '../assets/products/jackets/jacket-3.webp'
import jacket_4 from '../assets/products/jackets/jacket-4.webp'
import jacket_5 from '../assets/products/jackets/jacket-5.webp'
import jacket_6 from '../assets/products/jackets/jacket-6.webp'
import jacket_7 from '../assets/products/jackets/jacket-7.webp'

// HOODIES FEMALE
import hoodie_f_1 from '../assets/products/hoodies/female/hoodie-1.webp'
import hoodie_f_2 from '../assets/products/hoodies/female/hoodie-2.png'
import hoodie_f_3 from '../assets/products/hoodies/female/hoodie-3.png'
import hoodie_f_4 from '../assets/products/hoodies/female/hoodie-4.png'

// HOODIES MALE
import hoodie_m_1 from '../assets/products/hoodies/male/hoodie-1.webp'
import hoodie_m_2 from '../assets/products/hoodies/male/hoodie-2.webp'
import hoodie_m_3 from '../assets/products/hoodies/male/hoodie-3.webp'
import hoodie_m_4 from '../assets/products/hoodies/male/hoodie-4.webp'
import hoodie_m_5 from '../assets/products/hoodies/male/hoodie-5.webp'
import hoodie_m_6 from '../assets/products/hoodies/male/hoodie-6.webp'
import hoodie_m_7 from '../assets/products/hoodies/male/hoodie-7.png'
import hoodie_m_8 from '../assets/products/hoodies/male/hoodie-8.jpeg'
import hoodie_m_9 from '../assets/products/hoodies/male/hoodie-9.webp'

// ACCESSORIES
import accessory_1 from '../assets/products/accessories/accessory-1.webp'
import accessory_2 from '../assets/products/accessories/accessory-2.webp'
import accessory_3 from '../assets/products/accessories/accessory-3.webp'
import accessory_4 from '../assets/products/accessories/accessory-4.webp'

const availProducts = {
    jackets: [
        jacket_1,
        jacket_2,
        jacket_3,
        jacket_4,
        jacket_5,
        jacket_6,
        jacket_7,
    ],
    accessory: [
        accessory_1,
        accessory_2,
        accessory_3,
        accessory_4
    ],
    hoodie: {
        female: [
            hoodie_f_1,
            hoodie_f_2,
            hoodie_f_3,
            hoodie_f_4,
        ],
        male: [
            hoodie_m_1,
            hoodie_m_2,
            hoodie_m_3,
            hoodie_m_4,
            hoodie_m_5,
            hoodie_m_6,
            hoodie_m_7,
            hoodie_m_8,
            hoodie_m_9,
        ]
    }
}



const result = [];

for (let val in availProducts) {
    const cur = availProducts[val];
    const quantity = Math.floor(Math.random() * 50) + 1

    if (!cur.length) {
        for (let category in cur) {
            const imgArr = cur[category]
            const innerResult = imgArr.map((img, idx) => ({
                id: `${val}-${category}-${idx}`,
                category: val,
                img,
                sex: category.charAt(0).toUpperCase(),
                price: +(Math.random() * 350).toFixed(2),
                quantity
            }))
            result.push(...innerResult);
        }
    } else {
        const innerResult = cur.map((img, idx) => {
            let sex;
            const rand = Math.floor(Math.random() * 3) + 1;
            if (rand === 1) {
                sex = 'N'
            } else if (rand === 2) {
                sex = 'F'
            } else {
                sex = 'M'
            }

            return {
                id: `${val}-${idx}`,
                category: val,
                img,
                sex,
                price: (Math.random() * 200).toFixed(2),
                quantity
            }
        })

        result.push(...innerResult);

    }
}




export default result;