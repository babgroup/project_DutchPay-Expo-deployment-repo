import currentFoodRooms from "../mocks/restaurant/CurrentRooms.json"; //현재 생성된 모든 방 리스트 
import foodRoomLeader from "../mocks/restaurant/LeaderFoodFareRoom.json"; //현재 id의 방 정보 반환
import room from "../mocks/restaurant/List.json"; // 모든 레스토랑의 리스트 반환
import MemberFoodFareRoom from "../mocks/restaurant/MemberFood.json"; //본인이 시킨 메뉴 반환
import participants from "../mocks/restaurant/UserList.json"; //유저 리스트

export const getCurrentRooms = (): Promise<{ currentFoodRooms: typeof currentFoodRooms }> => {
  return Promise.resolve({ currentFoodRooms });
};

export const getRestaurantList = (): Promise<{ room : typeof room}> => {
  return Promise.resolve({ room })
};

export const getMyOrder = (): Promise<{ MemberFoodFareRoom : typeof MemberFoodFareRoom}> => {
  return Promise.resolve({ MemberFoodFareRoom })
};

export const getUserList = (): Promise<{ participants : typeof participants}> => {
  return Promise.resolve({ participants })
};

export const getLeaderInformation = (): Promise<{ foodRoomLeader : typeof foodRoomLeader}> => {
  return Promise.resolve({ foodRoomLeader })
};

