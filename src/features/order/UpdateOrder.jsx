import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({order}) {
const fetcher = useFetcher();

	return (
//fetcher.Form will not navigate away from the page - it will simply reload the page and revalidate the page
		<fetcher.Form method='PATCH' className='text-right'>
			<Button type='primary'>Make priority</Button>
		</fetcher.Form>
	)
}

export default UpdateOrder

//logic to update an order (we'll need an action)
export async function action({request, params}) {
	const data = {priority: true};
	await updateOrder(params.orderId, data);
	return null;
}
