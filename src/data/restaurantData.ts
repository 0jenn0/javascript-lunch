import { RestaurantInfo } from '../types';

export const initialData: RestaurantInfo[] = [
  {
    category: '한식',
    name: '서울깍두기',
    distance: 5,
    isFavorite: true,
    description:
      '전통적인 한국의 맛을 그대로 재현하는 서울깍두기에서는 직접 담근 깍두기를 비롯한 다양한 전통 반찬을 즐길 수 있습니다. 정갈한 한정식을 제공합니다.',
    link: 'https://example.com'
  },
  {
    category: '한식',
    name: '부산밀면',
    distance: 10,
    isFavorite: false,
    description:
      '여름철 별미, 시원한 육수의 밀면으로 유명한 부산밀면은 부산에서 시작해 전국적으로 사랑받는 맛집입니다. 직접 끓인 육수와 신선한 재료가 특징입니다.',
    link: 'https://example.com'
  },
  {
    category: '한식',
    name: '제주흑돼지',
    distance: 15,
    isFavorite: true,
    description:
      '제주도의 특산물인 흑돼지를 사용한 바비큐 전문점입니다. 제주흑돼지의 깊은 맛과 풍미를 경험할 수 있으며, 아름다운 제주도의 경치를 감상하며 식사를 즐길 수 있습니다.',
    link: 'https://example.com'
  },
  {
    category: '양식',
    name: '로마의 휴일',
    distance: 5,
    isFavorite: true,
    description:
      '이탈리아 현지 재료를 직수입하여 만든 파스타와 피자가 유명한 로마의 휴일은 이탈리안 레스토랑입니다. 현지의 맛과 분위기를 그대로 재현하였습니다.',
    link: 'https://example.com'
  },
  {
    category: '양식',
    name: '파리의 아침',
    distance: 10,
    isFavorite: false,
    description:
      '신선한 빵과 크로와상, 그리고 아침 커피로 유명한 파리의 아침은 프랑스 전통 베이커리와 카페입니다. 프랑스 현지의 맛을 경험할 수 있습니다.',
    link: 'https://example.com'
  },
  {
    category: '양식',
    name: '런던 피쉬앤칩스',
    distance: 15,
    isFavorite: true,
    description:
      '영국의 전통적인 피쉬앤칩스를 제공하는 런던 피쉬앤칩스입니다. 바삭바삭한 튀김과 신선한 생선으로 영국의 맛을 제공합니다.',
    link: 'https://example.com'
  },
  {
    category: '중식',
    name: '북경오리',
    distance: 5,
    isFavorite: true,
    description:
      '전통적인 북경오리를 즐길 수 있는 중국식당입니다. 오랜 경험을 가진 주방장이 정성스럽게 만든 북경오리는 그 맛이 일품입니다.',
    link: 'https://example.com'
  },
  {
    category: '중식',
    name: '상하이탕수육',
    distance: 10,
    isFavorite: false,
    description:
      '바삭한 탕수육과 다양한 중국 요리를 즐길 수 있는 상하이탕수육입니다. 중국 현지의 맛을 그대로 재현해 내는 것이 특징입니다.',
    link: 'https://example.com'
  },
  {
    category: '중식',
    name: '홍콩디저트',
    distance: 15,
    isFavorite: true,
    description:
      '홍콩 스타일의 다양한 디저트를 제공하는 홍콩디저트입니다. 달콤하고 풍부한 맛의 디저트로 식사를 마무리하세요.',
    link: 'https://example.com'
  },
  {
    category: '일식',
    name: '도쿄스시',
    distance: 5,
    isFavorite: true,
    description:
      '신선한 재료와 정성으로 만든 스시를 제공하는 도쿄스시입니다. 일본 현지의 맛을 그대로 느낄 수 있습니다.',
    link: 'https://example.com'
  },
  {
    category: '일식',
    name: '오사카라멘',
    distance: 10,
    isFavorite: false,
    description:
      '일본 오사카 스타일의 라멘을 즐길 수 있는 오사카라멘입니다. 진한 육수와 쫄깃한 면이 일품입니다.',
    link: 'https://example.com'
  },
  {
    category: '일식',
    name: '교토돈부리',
    distance: 15,
    isFavorite: true,
    description:
      '교토 스타일의 다양한 돈부리를 즐길 수 있는 교토돈부리입니다. 풍부한 맛과 영양이 가득한 식사를 제공합니다.',
    link: 'https://example.com'
  },
  {
    category: '아시안',
    name: '방콕팟타이',
    distance: 5,
    isFavorite: true,
    description:
      '태국 방콕의 전통적인 팟타이를 즐길 수 있는 방콕팟타이입니다. 신선한 재료와 향긋한 허브가 어우러진 태국의 맛을 제공합니다.',
    link: 'https://example.com'
  },
  {
    category: '아시안',
    name: '하노이쌀국수',
    distance: 10,
    isFavorite: false,
    description:
      '베트남 하노이 스타일의 쌀국수를 제공하는 하노이쌀국수입니다. 가벼우면서도 깊은 맛의 쌀국수를 즐길 수 있습니다.',
    link: 'https://example.com'
  },
  {
    category: '아시안',
    name: '싱가포르칠리크랩',
    distance: 15,
    isFavorite: true,
    description:
      '싱가포르의 유명한 칠리크랩을 제공하는 싱가포르칠리크랩입니다. 매콤달콤한 칠리소스에 찍어 먹는 크랩이 특징입니다.',
    link: 'https://example.com'
  },
  {
    category: '기타',
    name: '멕시칸타코',
    distance: 5,
    isFavorite: true,
    description:
      '멕시코 전통의 타코와 부리토를 즐길 수 있는 멕시칸타코입니다. 다채로운 맛과 신선한 재료가 어우러진 멕시코 요리를 제공합니다.',
    link: 'https://example.com'
  },
  {
    category: '기타',
    name: '브라질스테이크하우스',
    distance: 10,
    isFavorite: false,
    description:
      '브라질 스타일의 스테이크를 제공하는 브라질스테이크하우스입니다. 진한 육즙과 풍부한 맛의 스테이크를 즐길 수 있습니다.',
    link: 'https://example.com'
  },
  {
    category: '기타',
    name: '그리스메제',
    distance: 15,
    isFavorite: true,
    description:
      '그리스 전통의 다양한 메제 요리를 제공하는 그리스메제입니다. 신선한 재료와 풍미가 가득한 그리스의 맛을 경험할 수 있습니다.',
    link: 'https://example.com'
  }
];
