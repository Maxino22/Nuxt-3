export default defineEventHandler(async (event) => {
	const { code } = event.context.params
	const config = useRuntimeConfig()

	const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${config.currencyKey}`

	const { data } = await $fetch(uri)

	return data
})
