'use client';
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { toast } from 'react-toastify'

interface IUseFavoriteProps {
  productId: string;

  // 로그인 정보가 없을 경우 null
  currentUser?: User | null;
}

const useFavorite = ({ 
  productId, 
  currentUser
}: IUseFavoriteProps) => {

  const router = useRouter();
  const hasFavorited = useMemo(() => {

    // DB에 favorite 배열이 있으면 불러오고 없으면 빈 배열 출력
    const list = currentUser?.favoriteIds || [];

    // 불러온 favorite 배열에 일치하는 productId가 있는지 확인
    return list.includes(productId);
  }, [currentUser, productId]);

  const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
    // event 더블링 방지
    e.stopPropagation();

    // 로그인되지 않은 유저는 즐겨찾기 기능이 동작하지 않도록 바로 return 처리
    if (!currentUser) {
      toast.warn('로그인이 필요합니다.');
      return;
    }

    //
    try {
      let request;

      if (hasFavorited) {
        // 즐겨찾기가 되어있는데 버튼을 한번 더 누를 경우 delete경로로 axios 전송
        request = () => axios.delete(`/api/favorites/${productId}`);
      } else {
        // 즐겨찾기를 추가하려는 경우 post로 axios 전송
        request = () => axios.post(`/api/favorites/${productId}`);
      }

      // request 요청(delete or post) 전송
      await request();
      // 즐겨찾기 반영을 위해 router refresh
      router.refresh();
      toast.success('성공했습니다.');
    } catch (error) {
      toast.error('문제가 발생했습니다.');
    }
  }

  return {
    hasFavorited,
    toggleFavorite
  }
}

export default useFavorite;