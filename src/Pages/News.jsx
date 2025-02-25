
import Navbar from './../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

// Individual News Card Component
function NewsCard({ imageUrl, title, description }) {
  return (
    <div className="relative w-full p-6 bg-gradient-to-tr from-red-700 to-pink-600 rounded-xl text-white shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl hover:opacity-90">
      <img
        src={imageUrl}
        alt="News"
        className="w-full h-40 object-cover rounded-lg mb-4 transform transition duration-500 hover:scale-110"
      />
      <h3 className="font-semibold text-xl mb-2 tracking-wide">{title}</h3>
      <p className="text-md text-white/90 mb-6 font-montserrat leading-relaxed overflow-hidden text-ellipsis">
        {description}
      </p>

      {/* Read More Button */}
      <div className="absolute bottom-4 left-4 text-pink-200 text-sm hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-105">
        Read More
      </div>
    </div>
  );
}

// Main News Section Component
function NewsSection() {
  // Data for the cards (including unique images, titles, and descriptions)
  const newsData = [
    {
      imageUrl:
        'https://th-i.thgim.com/public/incoming/sjzla0/article68845885.ece/alternates/LANDSCAPE_1200/2303_8_11_2024_18_24_58_1_FMMUSICFEST.JPG',
      title: 'Kannada language through Bhakti Sangeetha touches core of your heart',
      description:
        'Nirmala Sitharaman Union Finance Minister inaugurated three-day Mysuru Sangeetha Suganda Music Festival that celebrates the Dasa tradition of Carnatic music.',
    },
    {
      imageUrl:
        'https://th.bing.com/th?q=Tulsi+Vivah+Patrika&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
      title: 'Tulsi Vivah is a sacred Hindu ritual',
      description:
        'Tulsi Vivah is a sacred Hindu ritual that symbolizes the ceremonial marriage of the Tulsi plant (holy basil) with Lord Vishnu, usually in his avatar as Shaligram or Lord Krishna.',
    },
    {
      imageUrl:
        'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1tV8GW.img?w=768&h=432&m=6',
      title: 'Kartiki Ekadashi celebrations at Pandharpurs',
      description:
        'Kartiki Ekadashi celebrations at Pandharpur: Vitthala and Rukmini Mata temple offers 24-hour darshan, symbolizing the ceremonial marriage of the Tulsi plant with Lord Vishnu.',
    },
    {
      imageUrl:
        'https://th.bing.com/th/id/OIP.jI1oDHCe04ZIDfri3dU8lQHaE5?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'Nagaraj Rao Havaldar says',
      description:
        'Music is a great unifying and connecting factors, says Nagaraj Rao Havaldar, highlighting Karnataka’s unique status as a state that has nurtured both Hindustani and Carnatic traditions.',
    },
    {
      title: 'Mohiniyattam pan-Indian traditions and fusion:',
      imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCACuAQYDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAUGAwQHAgEI/8QAPRAAAgEDAwIFAgQDBgQHAAAAAQIDAAQRBRIhEzEGIkFRYRRxI4GRoTIzQhVSscHR4QckYvBDVHKSorLx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQECBv/EADARAAICAQMBBgUDBQEAAAAAAAABAgMRBBIhMQUTIkFRYRQycYGRscHwI0Kh4fHR/9oADAMBAAIRAxEAPwDkVKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSvaxTOsjJG7LEA0jKpKopIUFyOAMkDms4sL1tm2NWZzhFWSIux+EDbv2rmQatK+srKSrAhgSCCMEEdwQa+V0ClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQCvcUU00kcUMbySyMFjSNSzux7BVXkmvFbNiZBe2PTJEn1MATGc5LgenNcbwsnqKTkkzFJFLC7RyxvHKh2ukilWUj0KtzWOrT4vtFjmsriNJApSWylLsX/ABrZsYDHnG0qRn0+1V+xjt5LmAXJYWwcGbZ/EUHJVfk9vzqKi1XVqa8yfWUfDWyr64M9ppk9wguHKxW2WHUc8tsxu2IDuNTeh2Phdr+Nbv8AFUKSiX9ytrbGUOm1XZRkgjdkb1+/HMxpGlvrssszoltp6MoZYUAyQOIot3YAdzVifStA0+MFYreHbIjLcTOm8PnH8U2V5+36d6p6rX11PYuWSaXQ3WrfLhPyJi217SdJt7GGbT7XTYblXSNoIf8Alm6b5WJGgDBsls5Jxzn1qB8faVoaWRv4oWtr6KWeS4t7e3DtOZZVaSWWVO20kkHJHOMdiPU2gRXtpeLmJpzAVtGMcSiOTcr7sxsTk4I74Ocke2r4e8S6jp0sOl6pqBSGIxWlvFcwxmKNBKA/WnPmGBwmQRng8HijTdv8SeWuqLN+ndfRcFBnRb2OdZFIv7aIzLKQVe4gUDckqn+tRyD3wCDnAxDV0TxnYLZ+KYbtHmMerBzLK7iREuZQ8TRJIEVMAFDjJ4PfmufSI0bvGwIZGZGBGCCDjFbVM96yjPsjg8UpSpiEUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBUv4bt0uNc0hHOES4Fwx+IAZsfnjFRFW7wdpd09wdSdAtsqSwRM3BkkIAYoPYdifc49Divqp93TKXsWdLDvLox9yZ8VwMNCuyxDvHqlrKpwRthkSXBX7ElT9hVGtYHdIHBI6t5Hbx+xYjzfPGR+vxV88TXEaaTrkRLPIx0mNmY5G9ppJsY7YAXioTQbX6mDRSAGjhvpJ5W2kdOSOaLgkcZIIxWbobO60zb9f2NTtCDv1ax1wv8FslntdHtk06G9kieJRlLIqbqa5YZYyOc7VHYADJ/asFk7azBNFdSPfwpIjBJdvWjdScgvHtP7etTV/pdtfH6iImC7EcsQubbCTCORSrAkdwQSDWPQtJsNK3i2lead9jXM8jZOFYKqHHlGPasaV0O7bTe/8AnmaShOE+nBENq93bX62hu57WNSE6Nrb2x6SKOAySKzHArR8TWsUl/ol5cXqWttqREF3dW6B12x4VpVQnsw2nGePy5n7zwxjUpprXUGiSaeS6ubVkEpfrJscMztkqfQEED0rBr2hxLDodtbhYrexW+upupmUCJmiDZ3HJJJwBn7VartrhOMov68exBZGVkJJrr05NHxfbGbStCvguuYgvILe2ju57aSCK1MY6cnS/m75AoIPbynOOBXNrqYz3FzMcnqzSSZY5J3MTyav/AI81G/tLPw9oYlgkiNit41xEEZpY2d0hUO2ZBtUFTzz+1c6rf0qfdps+fva3bUKUpVorilKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKtegeEbjUliu79pLaxcbolUYuLlfdNwwF/6iD8A9x4nZGtbpPCPcISse2KyyrxxSyuscUbySOcIkalnY+wVeasmm+DNavjvne2s4FbZK08geZTgNtWCLL5wQRnA+RXRLK103SI9thHHaKMBmgyJmx6vMx3k/dv09IGXxBaW016kKv09ylnkUIXmAIdjt45xnuT7nNZcu0JWPbTHJorQqHNrNiy8KeHNNCu8RvJwP5t+FaPOOSlsvk/9xetq71CzsY5JZ2G5UIiRCgIA7YUeUCqjqHiOdud/TXHlWPmVwfYnsPmqvdXlzduzSO20nIXcSB9yeSaijpLtQ918uPQnepp06xVHkmNb1iO7txbRNu692b26b0BROjDEp9doyT8t8cyHh28kstNiH0nludbt4zduWwYnVVdEGccEKc4+PWqdVkk8Wa3ewQ2d5Fp9yiCGK3LWUKSQhMKojaEL7D0Par9mmXdd3FcFGGpbt7yT5Og6ldS21pM0Tecjb74J8oNQV+bVbG2W2TVFuY3/ABZzHKgkL8yZidlyc4wdvGKkluEhmRLptwQocn3XBBYfvXzW7vQZjbLcF5vNudo5WRlQ8Hbt9a+V0+YyUcH1tri1lmnNdW9vfeHzp91fGYwC2uIL8zfUINxcF+qM4OTjv2qS8RanZRaZrlvdwySTz6MBFJFvLRPNcBUVsDAUlckn2x/VW1dJptwuntETK1hE8kTqAzrEUywYnA7DjJqjv4xMOoXV4NKsbgzoISt91JU+n2hRGUBC4xwfnNXdNB6i1OC+Xr+ShqpQpqam/m6FPJJPOfzr5WW4lWaeeZYo4hLLJIIoQRHEHYsEQH0HYc1ir6o+UYpSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAXbwho1mYjq9/HHKGkaOwikAdcocPMyHg4PC59icdqtN5q1vAG3SDd3POf1Nc303V7i1i+maQiMBzCSeEZzkg/BrZVmuZ41uZWWNmBdwM4B9RWPqNNO2xysfhNjT3111pQXiJm61e/1KdLSwjllkckIkQJJPqft7k1IWfhuWIrPqWpz29zHukaG3toblNmM7WaZipHfcOmR96kNDj02zWQ2mPOMGRyDI49MkUvtQlNxDEjhhG+ePTOOCaz/idstlUOPc0XpN8d9s+fYjrvwv4fkluhPNqD3cjCZrj6iAq/VAkV4wkQQqwIxj9scV6TQdItroCa+uJLY+ZY1hEMxwQGVnJZeO2QDnHpUm+rvIkMQ/8C3a3Q5OSiTyOn6A4Fa098+oPp0HSIaA3KEjs4nlEmMd+Of1rSrvu80Rw0dFjrfvh+/1IttBEty8dpdwrEdrJ9WXWQI3xGpBx24/Tmrv4c8NeHtPW31H6ue81aIyIqsscdnbyMpUNsZS5IB8pLDnnAI4rkls2eqMGOIrDJuPAEgxn3xmpTS57mO+iim8glJt5iO+4nyMueOD2Ps36dv1E3S1DqWbexq4NySeF7kzPEMvFcRKXhJUNjnA+RVVvLC4luJ5LZk2FyUUkKQPjirxPIJXdJ7clZCht5rVgWaNwMcPnP65rUv9FsbOy+omnlgVJVE9wVLlupjaojXPbsMD1r5zT6nun4ly/ucs/qJcnuygibT7q1TMLXVqbbfgHZJNH0d5HA9eea5pqPhzxLYyql1pl0DICyNChmR1A3ZVosjtz6cV2Ky0ueO1jMazW8bbXklvVH1UkODlRFjCZ+eR7CobUdUe1v79BO21Pp36ndxEII8LERzuc8D271odnamVVjhKPEitqqlq5RUX0/8AP9HIZbe5g2iaGWIsMjqxsmR7jcBWOux2Wrhrm1i1F+vCtte390jkSRM0ZKLb7TldoyMj1Jqvav4Ws9UNxd6HDBakzMOnJNHBbSMANyxdVgqkH0HAz6Vu/Fw3bWZL0VjbS8lnn9Pqc9pWa4t7i0mlt7mJ4p4m2yRyDDKf++1YatlFrApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUArPBdSw4Gdyeqt2/KsFK41nqdTwTltqRXHSnZCeCjHH6HtUnFqESRTNMX6pjIgC875W8q8n09T9qqFe0kkjIZHZSOxB7faq09NCRar1c4E5HcwW6zMBucBI0JGe2SxrTN3OHzvIOd3lJGNwB/wAhWGBuvmNiQQNwKjggehr69vMDnIbcwGR6/ka4oRi8PqXldfOqPd/LH09SXsrq4ke7h6hPUs55EB5/EixMP8DUpJcpPZ6bcswV5LNlds89aE7Bx84FRthbLaNDc3AZp3DdGKK5t0wjqVPU3ZOT7Vu248OFlWe21aKJMjiaOVMnuDsQcfY1UuSzlL8G5VrpU1Yt5bzw/tj9yxHX4zaaZdNBI1ysHVPTXerMmQw3kAADI5J4z295fw7INU1ia8lVmNvDHFbxsQ0VshAmd2OMFydoXj3PpgVz+z9KvrWK1j1SdLaFi7wCERo4cgKp2sTgepOT8+07o00Gn6nZwB1SOUKgZDhGcLtAbPv/AKVl91VF5S55M2LscZZ80T+v65Jp/WhSJHcxxAO/IQsSSSB3rmmpytPdwXDPk3EKowI2lZIlXgj5GKv2uaddajcXxhKLHG8SSPIewVFYkD/cfeqhe6TKBq2+RuolnZ6xp6lArNbxYtp0x7gDJqbwxkpP+c4KdVzqeV5MiUuOiNQkPLrpUsFsDyY55ryCMsnzgnFbGn3rxTRbziOIdOJf6Y1BzhfvyT7nmoy/iNqbFkmBErEnOcbThgGHtx+1WeK1QRWpERgOEdiuDdyMVGepL/SvsqgY9STUtzhCOfU0q5yhdKaWZfsePFllDqejm/SFhc2Gx1lKOpkt2wHTcwGQM7h7c+9cyrutnDHPa3FnM1wIbiGSBw80silZFKklZWKn9K4tqdhcaXf3thcY6trK0TEdmA5Vl+CMEferfZtspQcJeXQze045mrEsZ64NOlKVqGQKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQGSGQxSKw7Dg/Y96lx5tvOeQwP25qEqd0yMyxwOSuA7IcnsQff7GqupSUdxtdlW4lKt9Ov4JlNIsJLJWmS5a+I646JVRHbY8iIG4Zm789gPmoxhd6dMqSfX2+48R3UJgOPQEP3+atfh8C7v+q4XZAouHCqFUyZ2RLtHGOM/lVp1C6hitZGuI45lclBFMiyKSe5IcEYHr/vWbTZJZU+ck2qhFYl/c+X9zm31c3VztCOoGGt35P3Bz/jW+dRkkVVlALpgrIoKnI9wOKlptF8OT2xvIpZbJ85McJjEZUHbwsxwOfY+navL+Ep2tJ7rT9QM0/SZ4reSFFeZlHKBw+0Hv6V2fdt4ZXrskvlZL+H9U1G4sr65ub1CgkvGKXMYbqxxRA/hkEEEY4z3/wAPpe2m/sZkkQfQpdQMWAP1FrdR7HhdRgD3B/1qrQW+tx2U8EOxB0XLNNIqBhIytIE3Dk8YPao+SbXbEoJ45FVlV0bhkZGGQVZCV5+9UoUyslLEl7L2LMnWl445JeXwpJcLEp1RAISuwi3LYCnjvJVg/s9pVRTO2RgllQcn4BNUlNZvOcvyfSpC01yeMqTKR8ZqS2m9pbucFiu6lvCL0nkWPllZcZyBggfaub/8Q7Ypq9teBcJeWcYJHrJATGR+m2rUniKBwmWLMcAjI7mojx1JDd6RpV1GCQl9JHk916kOSCfnbXrS3Wd/HeuvBFqqK1p5KHlyc5pSlfRHzYpSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKmNHmVEu1ZtvTR5lwAxJKFMAH521D1t2J/FYDGWRRz2/mITUV0d0GifTzcJ5Xnx+eDpXhSFlh1GZlBxJBDHg93SI5AHfjcP+xUpqfmiiiQ72eRoVP8AFkqxVjgemc/pWHw1ay22lrPONpke4uol/qCEgLIfvjIrdukji+kEYzHBHtVSeSxPdvU+p/OsV/MbGplmciOkEkNzth2hIIIlbYCdq5K5AUg9s+o+4zUlocxia5ikwwginnRd0bMQAQV/Ddlznv5j37mtaKAvNNIVAV2yBtbAQDHm9fU1gjS/iyIdrsIOjCZHxgSHZtJY4CKuTgDuc1HOL4fUqwknlGhfajCbdVjTa8obBIJKBuSARznGTWpeWl8+nwTrbSvbmaKNcd2dYzIrNnHkBxk49h61YB4Svnt4naSAzyROwK/iRQMyqQjjdyM9yBn8u8xY2t4ZWgvrWNJDCsEzRMux4yhjG0DgrjscZHqKhbw90UXq1GKxJ5Ocw6ZaT2kzySrHMOmsbn8RUYvhmm2ebgegz+1Vu4u1t7i4hQrMkUrxrNEWRJQpI3KrjODXSYxaadBG8SStdQG9FwGjG6NLUFpHZm9ABkjJ9xkHiFHhf+1rKWW4hW21J3URzhHjAAAKLLGPK25edwHf32nNvSXxzJ2vj9ybtCqNrhLTcZXT6fz7lOGoptYbXz39M5+9YbjUby4t1tGkb6ZZjOEJJ/E27dxJ/P8AWt2Tw9qEN3dWszwItvK8TTbi0cm3+qMAbiPbgVOaZovhYbhdwandrCZLu5uI5FgjgtIQuepaorSlWJIJWXPbtzWm7KYNMxJ16hQzJNJlJpXfJvDXgeKxtfotIsllumspLV2ia5Yq0qsGbrMzbCOG57GqXdx2FlJKpjkjSO+u7GYWem2SR/VxOWcQySO7dMDAXgYx2o9Us4S4+pDXVGUtsnj7ZOcYzwOftzWWW1u4UikmgmjSX+U0sbIH4DZUsOe4/Wuiw3eiRp+HYyZcEGRrOKWVuO5aWcL+i1LWN5oWtTaHHqlvLe9M3dmtveRwLGjW6CSKcJbkDBGUOSe3bjNe3qILqzmo09tLWIvD83wcepX6IXTPCCKVi8O6KVIIbNlbs2PkspNVzVf+G/h3UTNcaXNLps8nmEXE1kG7kBDiRQfhzj0HpXPia84yc7meMnGqVI6xouq6FeSWOow9OVRujZTuimjJwJIX7FT/ALHBGBHVYTTWUQ9BSlK6BSlKAUpSgFKUoBSlKAUpSgFKUoBWa2cRzRse2drZ7YPGTWGg7iuNZWDqeOUdy0yZLzQ9PXIMk1pFbAKRnftMbHPsMEn/AHpqC9MY5YR9/Q5796qGgalPbaZpwg2ozRTGflmVRG7fi7WO4MQBuxwcA+pFSo1K8khVJLVn6gXzGVVbjG4tGw3E1gTca5tNm1slbHcl15JKS/kgh/CQLhFMkjeZ29diDsPk816tZ26MT9FQOlvkZsbcjLepqAuNYtGJhLch8GJRJuLD+k4FY59etAkSQwzycIq58qA7cnl/9KsJZXCKcoPLyWfTdYeO1uGihAdrtcoM7cFOSuT9s1KW+qQjrT3bxrDBHCTKSoKthywGSATwBgVzMa3fyrKiKIbeOJ3/AAnXq+uTucY4xyMVIaZpt7q46peSO38rdeXcFUEZPSjbgt6e3Ge/FRWU45J4Wxawy5xNpniGW5Fu7jSWkaW9kTdCb2YsC0UoYA7QNqsc87SO3J1/FqN9NFeR3TJaIttYmKBjEYTLIUjuFKA5CgsCpGOeMVntLe2sLZbS1ysIG0k8uxJJLMfc96rnivU1+khsYpAwluG6wxuPRtsPuye3mxyD6GoK6knheuT1Zb02vGOhXVuIo3nRZrYNHNJEH6M7yOFON/IwM+1ZYby3ivNOkMs77rmGO5CROolt2YF4toxkH2qEhukJkkKDdIxYlfMAT34bn962YGnmuLcx3VrGYCbrNweltWHzHBbgn2FXJ18NSL8rHPS5byzo/he/so9PmnR5pY4bm/ktI5eGiia5KRoynPIxxzxmqTf6oJGuWRZzGde1GWFndSHEmC+IxgAg+ueamNDhmttC1G8uSyB3kktkUruaJ3+p6kw9BgHA+aqn019t09V6b745L0qCQUNw3CuTxuwAcVxRg+JPoZNMbFZBVrn/AGboukeMIZII2BJHW6qZz8hSK3NNaeAWMkX0zyx6teBpYXWVyjQKAgjXzYHJ7YrVhguUR5Li0cxRYMjL05Nnpk7Tmt+xjjgtvD+21K3Ij1G9mzDLHIv1U/Ti3EgZG0Eqc+vxUctuUo+v7M2O0ZTcEprD/wCF6iikKxuzSEFQT1TsyTz5lGB+WKk7aRUTaNoOfQNx9iBVbtrvUpFyGSJQSvEILH85M/4VvQzXG7b1J5jySBkAe/CACvM0zJqaJbUtL0bXrT6PVLdZYslonUlJoJCMb4nHIPv6HHINcV8VeEdR8N3JI33OmSnNteohCjnHSnxwrj74Pcey9lS7ji3JL1omRQzdTlMHswfJXn71txz2t2k0YaC4hdDFPEyhkZWBBVlcbSD9qko1Tr4fQ7bp1PlH5opXTPFn/D2K3gudU0ES9OL8S405t0jqmcF7VuWIHcqcnGTk4wOaYrXrsjYsxM6cHB4Z8pSlSHgUpSgFK+4ptNAfKV921920B5pXraa+7WrgPFK97GpsNAeam/DOiDXdUhtZZOjaRKbm+l/uwIyrtX5YkKPvnnGKh9oq7+FLbVToevS6Zc2xnluIkntekjXQhhQkSRO3O47js4xlfc+XxZPbFs6ll4JfUV0uTUNas7a3kaGOaOC3dneNYFjiEQKKisemPQBQeO/esOmw3t9La29vEjyhJLpGlkWRDCNsLGZXJG0EDjGag555bZZLeW6d97KXCMJZZi4DA8HOT65P+lYFk1a3HTgMtvHcLh7e2LdW4DMXX6llI/T9qxnQrOZPB9O5ShVDueXjkvzNpkMM9vcrZvK2N6WzFliOclIpVXqexJDHBPf0pbLoF80VteafapA7t595ikRzlt4YEHPA7GqzaWktvbBZriW4urtgjWVrIyqsTHLAOP6+x3dhj2qUsrLVdQmt7Y2zxwwSkXuo3cIQiHkqEGRljwDjj1+8UYRSai+hXtqvi07FjPPU2o9D8KrOLiN5DEj5MU0jPGcHgOvPx3/epeW6sgiGLayY2oFOFAHHGPaq9dR3GmTzQGykkNwZBay26SSpImeQXjyvl4b07fFRr6lq8F1PEUSMvGs8Uc8O1ZUI2dmHoQeff9vS8R5emsbwsfksdzqa20TSzTIiDyokALTzSHgRRjHc1TdVke4kumMcf1lwE66RA7LGJSSYFBzlj3c/618fVLlrl3ljRLgq0Fq7KAlqmQWeFAf5h7En/KvKBVYBf4QSSxPmYnk7/Wpktr9jxRpJWye/jH5I5rF5Y1ljO1uASuCPsaxx/VxR3cjwpIhgltI3Gf5shAAVRzuqRljuGcpZKWupFdmiUeXpqMl/YYqe8NpbzXkl3bdVLLT7U2sJlAEk1y4V5nJHYDH71I7X58r9D1qtieyPEvP0Zi1F57bw+IZFZC0Y2q6lWKpbCMsc+mTioK0t2e4bErBI1tovK5BbCAkDFTt+t1qU0k0rLiO1vdSkEoYr04HWOEMBxgk4A9x8VHR26QqJJfpw7KJGJkfdk8nOBXiU0k4rqeuzaZW3qeeImeWO+GLWKZ/+dnjt1jbzxnc45Ib25J+1S8N2bm/mlkkZohttbZ48xAwQr0kYKvlwcE/nWhbzWwEkksUxmaN47Vlk2pDBImySUAjO5wSq+w83rivjTKp/CXYoCqignyoo2quTzwKhrjvlua6DtCzfY0pZS4LHutlGfq5lIHYlZCT7DGDWxb3OmYH1El4RxuA6YT/7A1VNzMAxZzn/AKj/AJV8Zsj0/Mk1aencjN79R9yxX17o6zCOK9VoMb1CxSGRG/usq+TPzmvNtrxsQ4i6TKzBsuGyxA9cYqsBCSAuMscADuSfQAc1K2WiTSo090XRFxiJQxck8jqFeQPgc110QgvEzkdRObxBFosvE13cljHbW7BO7KZUG4+mSTzUdrXhrw54hWa56P8AZepbd7XVsN9vK5/8xAMd/UjB+/Y6wjvooxEsX4TElHts7eO4BH7gitm2N2BIkiMQnnfB2yAe4B4OPUVGpbHmJK4ufzHK9V0fUtHuWtb6Hax3GGVDvguIwcdSCQcMv+HYgEYEftrtLR2GoWdzBfWYuooYpbuWF9ylBGhbchGGDnGBjHz884vtFCvC1g3VWWGOaSEsu63eTLCIMTzgYz6j571cjqYtqMuGV+4k3iPJXdv2pW68DRkrIrIw4KuCpH5GlWdxA1jhmtsamyt1YN3tWQ24X1H5CgwR2w+9fenW901z9/gCvawbiAMfnn/KmRg0BGf/ANps+RUk1rtAJI59s/5156KCubjuDSEZNBE3tUgIVGOBz8V6EX2/euZO7SO6LexroHhjSEfQLhorhrS41fqRSP1JOpNDC+Yni6eCqqwOf73viqkIgQRx+dWGx8SX9tbizJaZY44w3U2IsFvEuBHbdNQc4HJYmobpNI9KJPWOhaDpXXaNpnukjjkk1EHpPbyqMMbRMkKDznOSc4NaUc+kWayS2lhFK7yiLq3Lbd0mAxMUO7yk+oUGvMEWpavZR3Alt7e2uNjgbZZ7gR7m5LMypnjgbcc1GQXSxORpnUhYMY5rycRvfOxzkRSAYROBwOfnmsyy2EptR5a/n86l7TVWzSivMlxrCoAx+gSQjErGUy9MICxKW0EYfPp5n++Kj5tSuJYyHkk7FyFkdY2YjJzG5I/etFQWjtVHmmvLmOJnkJJJlcAlm5P3qxado8TxOzlTJM0yscbvJHI0ZGW5AOOwx9zXYxWVkvyqr00W7fE2ael6jdxLMyLKIhZM7EM6qHyD1AWIyR8DGPStm6vtE1GG0OoRv1LdZBFNZyCGVQ+CynOVwe4BX1PvzOjR7R4wDNcpkAgwGKMjjHfYW/8AlXgeGrBj5rm6ckZzKtrJnn13RGjUMt9CNXPC2wSx7spOr2+jNbwy6fdyy3DSEGzu4443aEkbWEyHZnvk7sjj89I2epwOis0TKVU7zIj9MFc4YocHHbgnPp7V0F/C2mnhZpBzn+TARz8ACtZ/CULhYkuU7naHgwB68bXr3FpLCf8Ag53811/UrVjZNOZrKNzFEzAaneyMI57kjtbWyt5gnvx/pVll+gsbdpDshREWBUhZTJIwXYFIHOcDkkdhWheeF7u0TzXNu6hgU3o7lSOeM4/fNYbLQ7i6M4a4QCKN5n2BoyQD/SVyM/lUcspHmFEJPMmyMubq6vWeO3tXEf09sriNWOY7bd5mdh/AWJJz6/asCQKSpmdCAUfCKMNtZW2ncOxxzx61YYLSGGJAMsQoG5/4mxwAfTA9B/rT6eKaRIykeWOdxHIA54xUUbFnktuyUIbKvD6+5BSfiSyOB/Mkkkx/d3MW2jPoOw+1eSrj+JWX/wBQPNTLaZGyPOpASN9jjkPz6rjj9q8BeipVSWXHIkAOf8v2q/CTaSS4MeyChy3yaKK2xcn04zj1ratbQXDEyMyxKMlhxk+wJyKzl7KWFjLbAODt3QsYyeO5wcftXyS5PTjSIFFUBQpwRgDAAqbvfJFZ1Z5NyKKztyTA0KMAcSPuL5+DjNSNtcNEibZImUP1ScOCT7VW2aUBSxHmGePaty2uGYCLAA4Ofg81FZHKy2SVS2vGCfnuLWdw7R++zkggfkK1P+XZzvndFwfwwrkt8bu1arXAjUZTd/dycfqcVpy38iEbok5JwVY8Z+CP86gjD0LEprzN/ULqyh0nVkFz0JJLYREqXVtjSJvw+PbI71V7ua8F1ey2l1FeRiYRxrMEWXoooRCCuPTHoKw65qjKjWgjz1OlcSux7oj8IB98E/aqy91MzvIx87uzMwJByefSpY6Zyalkk0+qjVZukvw8Mskms2wwt7amOVcgrIMn8twNKhIpdTktxKJ1KCV4QJcuQVVW43A8c0qT4fH/AEuz7VbeVj7xWf1P/9k=',
      description:
        'Mohiniyattam pioneer Vijayalakshmi brings to towns a medley of pan-Indian traditions, blending tradition with contemporary themes.',
    },
    {
      imageUrl:
        'https://th.bing.com/th/id/OIP.ncoymo4awoTU1jV3BzoFDgHaE7?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'Chhath Puja is more than just a festival',
      description:
        'Chhath Puja is more than just a festivals; it embodies a vivid display of devotions, tradition, and respect for nature, predominantly celebrated in Bihar and Jharkhand.',
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 bg-gray-50">
      {/* Navbar - Normal flow, no fixed positioning */}

      {/* Latest News Header - Add margin-top */}
      <div className="relative text-center mt-32 mb-6">
        <h2 className="text-white font-bold text-4xl px-4 py-2 bg-gradient-to-tr from-red-700 to-pink-600 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
          Latest News
        </h2>
        <div className="flex items-center justify-center mt-4">
          <p className="text-white font-medium text-lg px-4 py-3 bg-gradient-to-tr from-red-700 to-pink-600 rounded-full shadow-lg transform transition duration-200 hover:scale-105">
            Discover the latest events and cultural highlighted through Sanskriti Darpana.
          </p>
        </div>
      </div>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 w-full max-w-screen-lg mb-12">
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            imageUrl={news.imageUrl}
            title={news.title}
            description={news.description}
          />
        ))}
      </div>

      {/* Footer */}
    </div>
  );
}

export default NewsSection;