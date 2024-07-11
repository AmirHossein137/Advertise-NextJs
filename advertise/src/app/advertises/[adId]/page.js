
const AdId = async (context) => {
    const id = context.params.adId;
    const res = await fetch(`http://localhost:3000/api/advertise/details/${id}` , { cache : "no-store" })
    const result = await res.json()
    console.log(result)

  return (
    <div>
        {id}
    </div>
  )
}

export default AdId