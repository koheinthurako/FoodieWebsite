
// ဟိုဘက်က rendering လုပ်ဖို့ data လှမ်းပေးလိုက်တဲ့အခါ ဒီဘက်က အောက်ကလို () ထဲမှာ meal ကို {} ထဲထည့်ပြီးပြန်သုံးပေးရတယ်
const Card = ({meal}) => {
  return (
    <div>
        <img src={meal.strMealThumb} alt="" />
        <h3>{meal.strMeal}</h3>
    </div>
  )
}

export default Card