
// ဟိုဘက်က rendering လုပ်ဖို့ data လှမ်းပေးလိုက်တဲ့အခါ ဒီဘက်က အောက်ကလို () ထဲမှာ meal ကို {} ထဲထည့်ပြီးပြန်သုံးပေးရတယ်
const Card = ({meal}) => {
  return (
    <div className="w-52 border-2 flex justify-center items-center flex-col p-5 rounded-xl gap-5 cursor-pointer hover:shadow-2xl">
        <img src={meal.strMealThumb} width={"200px"} className="rounded-lg" alt="" />
        <h3>{meal.strMeal}</h3>
        <button className="text-white bg-blue-500 px-10 py-2 rounded-xl">Detail</button>
    </div>
  )
}

export default Card