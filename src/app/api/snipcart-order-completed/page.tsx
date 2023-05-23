
import createPrintfulDraftOrder from '../../utils/printfulOrder'; // Adjust the import path to your actual createPrintfulDraftOrder function

const SnipcartOrderCompletedPage = () => {
  return null;
};

export async function getServerData(req: any, res: any) {
  if (req.method === 'POST') {
    const snipcartEventData = req.body;

    if (snipcartEventData.eventName === 'order.completed') {
      const orderData = {
        // Extract the necessary order data from snipcartEventData and format it for Printful
      };

      await createPrintfulDraftOrder(orderData);
      res.status(200).send('Order completed webhook handled');
    } else {
      res.status(400).send('Invalid event');
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}

export default SnipcartOrderCompletedPage;
