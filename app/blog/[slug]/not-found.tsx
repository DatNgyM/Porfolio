import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center glass dark:glass-dark rounded-2xl p-12 max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4 gradient-text">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Bài viết không tìm thấy
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
        </p>
        <Link href="/blog">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại Blog
          </Button>
        </Link>
      </div>
    </div>
  );
}

