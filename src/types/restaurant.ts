export interface RestaurantcurrentFoodRooms {
  id: number
	restaurantName: string,
	deliveryFee: number,
	maxUser: number,
	currentUsers: number,
	deadline: string
	imageUrl: string, 
}

export interface RestaurantList {
  id: number,
  restaurantName: string,
	deliveryFee: number,
  imageUrl: string, 
  businessHours: string
}

// businessHours: string,
//   restaurant_id: number,
//   min_member: number,
//   food_order:[
// 					{
// 						item_name: string,
// 				    quantity: number,
// 				    price: number,
// 				  }
// 				],
//   progress: number,
//   descripton: string,
//   userName: string,