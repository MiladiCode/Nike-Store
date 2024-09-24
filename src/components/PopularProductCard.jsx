import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price, raite}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL} alt={name} className="w-[280px] h-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24}/>
        <p className="font-montserrat text-xl leading-normal text-slate-gray">{raite}</p>
      </div>
      <h3 className="mt-4 leading-normal text-2xl font-semibold font-palanquin">{name}</h3>
      <p className="font-montserrat text-2xl leading-normal text-violet-700">{price}</p>
    </div>

  )
}

export default PopularProductCard