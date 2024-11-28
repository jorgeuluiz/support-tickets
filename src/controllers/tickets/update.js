export function update({ request, response, database }) {     
  
  const { id } = request.params
  const { equipment, description } = request.body

  database.update("tickets", id, {
    equipment,
    description,
    update_at: new Date()
  })

  return response.end()

}