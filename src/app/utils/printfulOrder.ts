
const createPrintfulDraftOrder = async (orderData: any) => {
  try {
    const response = await fetch('https://api.printful.com/orders', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from('your_printful_api_key' + ':').toString('base64'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log('Draft order created successfully:', data);
      return data;
    } else {
      console.error('Error creating draft order:', response.status, response.statusText);
    }
  } catch (error: any) {
    console.error('Error creating draft order:', error.message);
  }
};

export default createPrintfulDraftOrder;
