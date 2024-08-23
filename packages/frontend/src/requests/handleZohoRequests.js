import axios from 'axios'

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
        url: ``,
        data: data,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return result
}