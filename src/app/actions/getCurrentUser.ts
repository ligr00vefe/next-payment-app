import { authOptions } from '@/lib/authOptions';
import { getServerSession } from "next-auth";

export async function getSession() {
  return await getServerSession(authOptions);
}

// 데이터베이스에 있는 유저 데이터를 가져오는 getCurrentUser 함수
export default async function getCurrentUser() {
  try {
    const session = await getSession();

    // session.user에 email이 없을 경우
    if (!session?.user?.email) {
      return null;
    }

    // 이메일을 이용해서 데이터베이스에서 요청 정보 찾은 후 가져오기
    const currentUser = await prisma?.user.findUnique({
      where: {
        email: session.user.email as string,
      }
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;

  } catch (error) {
    console.log('@error: ', error);
    return null;
  }
}