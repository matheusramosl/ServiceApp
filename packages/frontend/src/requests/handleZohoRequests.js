import axios from 'axios'

// export const handleZohoRequest = async (method) => {
//   console.log('fazendo req')
//     const result = await axios({
//         method: 'get',
//         url: `https://6654-200-169-156-219.ngrok-free.app/drummondportal-homolog/us-central1/workflowRoute/updateAccount/crm`,
//         // headers: {
//         //   'Content-Type': 'application/json',
//         // },
//       });
//       console.log("result")
//       console.log(result)
//       return result.data
// }
export const handleZohoRequest = async (method) => {
    const result = await axios({
        method: 'get',
        url: `http://localhost:3001/proposal/${method}`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return result.data
}

export const handlePostZohoRequest = async (method, data) => {
    const result = await axios({
        method: 'post',
        url: `https://6654-200-169-156-219.ngrok-free.app/drummondportal-homolog/us-central1/workflowRoute/updateAccount/crm`,
        data: data,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return result
}