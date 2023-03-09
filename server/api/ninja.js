export default defineEventHandler(async (event) => {
	///handle query param
	// const { name } = getQuery(event)

	// ///handle post data
	// const { age } = await readBody(event)
	const config = useRuntimeConfig()

	// api call with private key
	const { data } = await $fetch(
		`https://api.currencyapi.com/v3/latest?apikey=${config.currencyKey}`
	)

	return data
})
