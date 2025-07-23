export const getStatusColor = (status: string) => {
  switch (status) {
    case 'orange':
      return '#FC9533'; // 메인 주황색
    
    case 'gray':
      return '#e7e7e7ff'; // 연회색(div의 배경 등)

    case 'dark-gray':
      return '#9b9b9bff'; // 기본 회색(placeholder, 비활성화된 버튼 등)

    case 'white':
      return '#FFFFFF'; // 흰색(배경 등)

    case 'text-color':
      return '#000000'; // 검정색
  }
};