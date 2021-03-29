import React from 'react';

// const features = [
//   {
//     name: '',
//     number: 4,
//     icon: ,
//   },
//   {
//     name: 'Baths',
//     number: 4,
//     icon: ,
//   },
//   {
//     name: 'sq ft',
//     number: 4200,
//     icon: ,
//   },
//   {
//     name: false,
//     number: 2017,
//     icon:,
//   },
// ];

const PropertyCard = ({ property }) => {
  const {
    area,
    baths,
    beds,
    discount,
    features,
    images,
    price,
    title,
  } = property;

  const newPrice = price - price * (discount / 100);
  return (
    <div
      className='col-span-6 lg:col-span-4 xl:col-span-6  rounded-lg overflow-hidden  shadow-lg hover:shadow-2xl border xl:flex transition-shadow duration-500'
      id='card-height'>
      <div className=' w-full h-1/2 xl:h-full xl:w-1/2 xl:flex-none bg-red-50 rounded-md xl:mr-3'>
        <img
          className='object-cover block w-full h-full'
          src={images[0]}
          alt='property name'
        />
      </div>
      <div className='px-3 py-4 mt-1 h-1/2 '>
        <h1 className='mb-4 text-lg font-semibold md:text-2xl '>{title}</h1>
        <div className='flex flex-wrap items-center justify-start mb-4 '>
          <div className='w-1/2 flex items-center text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='far fa-bed' aria-hidden='true'></i>
            </div>
            <div className='mr-1'>{beds}</div>
            <p>Beds</p>
          </div>
          <div className='w-1/2 flex items-center text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='far fa-bath' aria-hidden='true'></i>
            </div>
            <div className='mr-1'>{baths}</div>
            <p>Baths</p>
          </div>
          <div className='w-1/2 flex items-center text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='far fa-layer-group'></i>
            </div>
            <div className='mr-1'>{area}</div>
            <p>sqft</p>
          </div>
          <div className='w-1/2 flex items-center text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='far fa-building' aria-hidden='true'></i>
            </div>
            <div className='mr-1'>{features.builtYear}</div>
          </div>
        </div>
        <div className='flex items-end space-x-2'>
          <p className='font-bold text-xl text-blue-500 '>
            ${Math.floor(newPrice)}
          </p>
          <p className='text-sm  line-through font-semibold text-gray-400 '>
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
