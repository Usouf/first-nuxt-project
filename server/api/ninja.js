export default defineEventHandler(async (event) => {

    // handle query params
    // const { name } = getQuery(event)

    // handle body
    // const { age, gender } = await readBody(event)

    const { currencyKey } = useRuntimeConfig()
    
    const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`

    const { data } = await $fetch(uri)

    return data
})