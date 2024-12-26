import React from 'react';

import Footer from '../components/Footer.jsx';


const heritageSites = [
  
  { name: 'Taj Mahal', location: 'Agra, Uttar Pradesh', image: 'https://th.bing.com/th?id=OSK.HEROXc8hMxLVsne8ysn4W8WbyIq2uGCAehK7li5twe-xemY&w=312&h=200&c=15&rs=2&o=6&pid=SANGAM', description: 'A symbol of love built by Mughal Emperor Shah Jahan.Shah Jahan (r. 1628–1658) to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex' },
  { name: 'Qutub Minar', location: 'Delhi', image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Qutub_Minar_Delhi_02.jpg', description: 'The tallest brick minaret in the world, built in 1193. The construction of the Qutb Minar was planned and financed by the Ghurids, who emigrated to India and brought Islam with them' },
  // Add all your other heritage sites here...

  { name: 'Red Fort Complex', location: 'Delhi', image: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Uttar-Pradesh-Agra-Agra-Fort-Jahangiri-mahal-Apr-2004-00.JPG', description: 'A symbol of Mughal power and architecture in Delhi. Delhi. Originally red and white, its design is credited to architect Ustad Ahmad Lahori' },
  { name: 'Pink City', location: 'Jaipur', image: 'https:/images.forbesindia.com/media/images/2023/Sep/img_219451_jaipurcity_shutterstock_776733613_bg.jpg', description: 'The historic walled city of Jaipur, known as the "Pink City," was founded in 1727 by Maharaja Sawai Jai Singh II. Its nickname originates from the terracotta-pink hue that adorns its historic buildings.' },
  { name: 'Sunderbans', location: 'West Bengal', image: 'https://th.bing.com/th?id=OLC.zbeO%2foEW3beaaA480x360&w=229&h=140&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sundarban_Tiger.jpg/150px-Sundarban_Tiger.jpg', description: 'World\'s largest mangrove forest, a UNESCO Natural Heritage site.' },
  { name: 'Western Ghats', location: 'Kerala, Tamil Nadu, Karnataka, Goa, Maharashtra, Gujarat', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Pampadumshola.jpg/150px-Pampadumshola.jpg', description: 'A mountain range along the western coast of India, known for its biodiversity.' },
  { name: 'Khangchendzonga National Park', location: 'Sikkim', image: 'https://th.bing.com/th?id=OLC.YzrJMv%2fDfZV+pA480x360&w=210&h=140&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', description: 'A UNESCO Natural Heritage site famous for its mountainous terrain.' },
  { name: 'Ajanta Caves', location: 'Maharashtra', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cave_26%2C_Ajanta.jpg/150px-Cave_26%2C_Ajanta.jpg', description: 'Famous Buddhist cave temples with elaborate paintings and sculptures.' },
  { name: 'Ellora Caves', location: 'Maharashtra', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Kailasa_temple_overview%2C_Ellora.jpg/150px-Kailasa_temple_overview%2C_Ellora.jpg', description: 'Cave complex known for rock-cut temples and religious sculptures of Buddhism, Hinduism, and Jainism.' },
  { name: 'Agra Fort', location: 'Uttar Pradesh', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Uttar-Pradesh-Agra-Agra-Fort-Jahangiri-mahal-Apr-2004-00.JPG/150px-Uttar-Pradesh-Agra-Agra-Fort-Jahangiri-mahal-Apr-2004-00.JPG', description: 'A 16th-century Mughal imperial fortress in Agra. main residence of the rulers of the Mughal dynasty until 1638, when the capital was shifted from Agra to Delhi' },
  { name: 'Sun Temple Konark', location: 'Odisha', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/150px-Konarka_Temple.jpg', description: 'A Hindu temple designed as a giant chariot for the sun god Surya.Konark Sun Temple is a 13th-century CE Hindu Sun temple at Konark about 35 kilometres (22 mi) northeast from Puri city on the coastline in Puri district, Odisha,' },
  { name: 'Kaziranga National Park', location: 'Assam', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Beauty_of_Kaziranga_National_Park.jpg/150px-Beauty_of_Kaziranga_National_Park.jpg', description: 'Home to the world’s largest population of one-horned rhinoceroses.' },
  { name: 'Manas Wildlife Sanctuary', location: 'Assam', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Herd_of_Elephant_in_Manas.jpg/150px-Herd_of_Elephant_in_Manas.jpg', description: 'Known for its rich biodiversity and Assam Roofed Turtle.' },
  { name: 'Keoladeo National Park', location: 'Rajasthan', image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Bar-headed_Geese-_Bharatpur_I_IMG_8335.jpg', description: 'A famous bird sanctuary and UNESCO Natural Heritage site.' },
  { name: 'Mountain Railways of India', location: 'Darjeeling, Nilgiri, Kalka–Shimla', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/KSR_Train_on_a_big_bridge_05-02-12_71.jpeg/150px-KSR_Train_on_a_big_bridge_05-02-12_71.jpeg', description: 'A network of 3 historic mountain railways in India, known for their engineering marvels.' },
  { name: 'Ranthambore Fort', location: 'Rajasthan', image: 'https://th.bing.com/th?id=OLC.2dWHVVdIdccuBQ480x360&w=215&h=140&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', description: 'An ancient fort located in Ranthambore National Park.' },
  { name: 'Buddhist Monuments at Sanchi', location: 'Madhya Pradesh', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mahabodhitemple.jpg/150px-Mahabodhitemple.jpg', description: 'Famous Buddhist stupas and monuments dating back to 3rd century BC.' },
  { name: 'Chilika Lake', location: 'Odisha', image: 'https://th.bing.com/th/id/OIP.Pi31Ezz512YafBSvnsQqQQHaEH?w=289&h=180&c=7&r=0&o=5&pid=1.7', description: 'A brackish water lagoon, famous for its bird sanctuary.' },
  { name: 'Nanda Devi and Valley of Flowers National Parks', location: 'Uttarakhand', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/%28A%29_Valley_of_flowers%2C_Garhwal_Uttarakhand_India.jpg/150px-%28A%29_Valley_of_flowers%2C_Garhwal_Uttarakhand_India.jpg', description: 'A UNESCO Natural Heritage site known for its rich flora and fauna.' },
  { name: 'Jantar Mantar', location: 'Jaipur', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Yantramandir01.jpg/150px-Yantramandir01.jpg', description: 'An astronomical observatory built in the 18th century.' },
  { name: 'Sundarbans National Park', location: 'West Bengal', image: 'https://th.bing.com/th?id=OLC.+aC6yoPVyx8MmQ480x360&w=212&h=140&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', description: 'The largest tidal halophytic mangrove forest in the world.' },
  { name: 'Humayun\'s Tomb', location: 'Delhi', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Humayun%27s_tomb_by_Shagil_Kannur_4.jpg/150px-Humayun%27s_tomb_by_Shagil_Kannur_4.jpg', description: 'The tomb of the Mughal Emperor Humayun, which inspired the Taj Mahal.' },
  { name: 'Red Fort', location: 'Delhi', image: 'https://th.bing.com/th?id=OLC.tCSmYf0LsVTc4w480x360&w=186&h=140&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', description: 'The fort served as the main residence of the Mughal emperors for around 200 years.' },
  { name: 'Brihadeswarar Temple', location: 'Tamil Nadu', image: 'https://th.bing.com/th?id=OSK.HEROhjCW50bQYy7t454d2fA3aN4LdDqsCqTJKqkC3VbYoH0&w=312&h=200&c=15&rs=2&o=6&pid=SANGAM', description: 'One of the largest temples in India, a masterpiece of Tamil architecture.' },
  { name: 'Mahabalipuram', location: 'Tamil Nadu', image: 'https://www.bing.com/th?id=OIP.E4_LARLcIetu3gnhAaLg_gHaDt&w=284&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', description: 'Famous for its rock-cut temples and ancient monuments.' },
  { name: 'Fatehpur Sikri', location: 'Uttar Pradesh', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Fatehput_Sikiri_Buland_Darwaza_gate_2010.jpg/150px-Fatehput_Sikiri_Buland_Darwaza_gate_2010.jpg', description: 'A former Mughal capital, built by Emperor Akbar in the late 16th century.' },
  { name: 'Rani Ki Vav', location: 'Gujarat', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Le_temple_de_Brihadishwara_%28Tanjore%2C_Inde%29_%2814354574611%29.jpg/150px-Le_temple_de_Brihadishwara_%28Tanjore%2C_Inde%29_%2814354574611%29.jpg', description: 'An intricately designed stepwell and a UNESCO World Heritage site.' },
  { name: 'The Architectural Work of Le Corbusier', location: 'Chandigarh', image: 'https://th.bing.com/th?id=OSK.HEROY0IBGcdm_dXeSUld_xRV8Du-ya2FmY8WcbAa2RAPSWc&w=312&h=200&c=15&rs=2&o=6&pid=SANGAM', description: 'The work of architect Le Corbusier, designed as part of the city’s modern architecture.' },
  { name: 'Delhi Red Fort', location: 'Delhi', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Red_Fort%2C_Delhi.jpg', description: 'A UNESCO World Heritage Site built by Emperor Shah Jahan in the 17th century.' },
  { name: 'Sanchi Stupa', location: 'Madhya Pradesh', image: 'https://th.bing.com/th/id/OIP.Y7PIpek6srVH0fxKYeUbmQHaE7?w=243&h=180&c=7&r=0&o=5&pid=1.7', description: 'A Buddhist complex with stupa and shrines built in the 3rd century BC.' },
  { name: 'Dholavira', location: 'Gujarat', image: 'https://th.bing.com/th?id=OSK.HEROciCQq_JYIJss4rm8bzK_rdQK95JdpqKnuG0SLYIAZ6Y&w=312&h=200&c=15&rs=2&o=6&pid=SANGAM', description: 'An ancient Harappan city known for its water management system.' },
  { name: 'Champaner-Pavagadh', location: 'Gujarat', image: 'https://th.bing.com/th?id=OLC.nkL5e2+tfnFzoA480x360&w=221&h=140&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', description: 'An archaeological site with Hindu and Islamic structures.' },
  { name: 'Great Himalayan National Park', location: 'Himachal Pradesh', image: 'https://th.bing.com/th/id/OIP.bR5mqYO-d-AugkFDTG3uqAHaE8?w=290&h=193&c=7&r=0&o=5&pid=1.7', description: 'A park known for its biodiversity and pristine natural environment.' },
  { name: 'Kachchh', location: 'Gujarat', image: 'https://www.bing.com/th?id=OIP.8WVF9-s4zzFxhaeU99L8OwHaEC&w=181&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', description: 'Known for its white salt desert and cultural heritage.' },
  { name: 'Meghalaya Caves', location: 'Meghalaya', image: 'https://th.bing.com/th/id/OIP.UTIObatFDpzrx3s7R_PR1AHaEK?w=279&h=180&c=7&r=0&o=5&pid=1.7', description: 'Famous for its unique limestone caves and stunning landscapes.' },
  { name: 'Ladakh Leh', location: 'Jammu & Kashmir', image: 'https://th.bing.com/th?id=OSK.HEROhOZgYFcqVaBPB0wqDeLPm3oEUob4xk0RsjadqKDHvi4&w=312&h=200&c=15&rs=2&o=6&pid=SANGAM', description: 'Famous for its Buddhist monasteries and unique desert landscapes.' },
  { name: 'Bhopal', location: 'Madhya Pradesh', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/20191218_Pa%C5%82ac_Wiatr%C3%B3w_w_Jaipurze_1129_9124.jpg/150px-20191218_Pa%C5%82ac_Wiatr%C3%B3w_w_Jaipurze_1129_9124.jpg', description: 'Known for its lakes, rich culture, and history.' },
  { name: 'Tomb of Itmad-ud-Daula', location: 'Agra, Uttar Pradesh', image: 'https://th.bing.com/th?id=OSK.cd058bee0e31aac34638b4ec46c82dc6&w=224&h=200&c=7&rs=1&o=6&pid=SANGAM', description: 'Often considered a precursor to the Taj Mahal, this tomb features intricate marble work.' },
  { name: 'Elephanta Caves', location: 'Rajasthan', image: '    https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Trimurti%2C_Cave_No._1%2C_Elephanta_Caves_-_1.jpg/150px-Trimurti%2C_Cave_No._1%2C_Elephanta_Caves_-_1.jpg', description: 'A popular hill station known for its ancient temples and the Dilwara Temples.' },
  { name: 'Hampi', location: 'Rajasthan', image: '  https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/The_elegant_stone_chariot.jpg/150px-The_elegant_stone_chariot.jpg', description: 'A popular hill station known for its ancient temples and the Dilwara Temples.' },
];

function HeritageTable() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen p-8 flex flex-col items-center">
      <div className="max-w-6xl w-full shadow-xl rounded-3xl overflow-hidden bg-white bg-opacity-70 backdrop-blur-lg transform hover:scale-105 transition-all duration-500 mb-8">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-white bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-t-3xl shadow-lg">
          UNESCO World Heritage Sites in India
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-transparent rounded-lg border border-gray-300">
            <thead>
              <tr className="text-white bg-gradient-to-r from-red-500 to-pink-500">
                <th className="px-6 py-4 font-semibold text-lg text-left">Image</th>
                <th className="px-6 py-4 font-semibold text-lg text-left">Name</th>
                <th className="px-6 py-4 font-semibold text-lg text-left">Location</th>
                <th className="px-6 py-4 font-semibold text-lg text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {heritageSites.map((site, index) => (
                <tr 
                  key={index} 
                  className={`border-b transition-all duration-500 ease-in-out ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gradient-to-r hover:from-red-100 hover:to-pink-100 hover:scale-105 hover:shadow-2xl transform`}
                >
                  <td className="px-6 py-4">
                    <img 
                      src={site.image} 
                      alt={site.name} 
                      className="w-24 h-24 object-cover rounded-full shadow-xl border-4 border-pink-300 transition-all duration-500 hover:rotate-12"
                    />
                  </td>
                  <td className="px-9 py-8 font-semibold text-pink-800">{site.name}</td>
                  <td className="px-6 py-4 text-gray-700">{site.location}</td>
                  <td className="px-6 py-4 text-gray-700">{site.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full">
        <Footer/>
      </div>
    </div>
  );
}

export default HeritageTable;
