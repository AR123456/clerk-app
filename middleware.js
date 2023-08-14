import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // can create more protected routes here or use .env in root
  publicRoutes: ["/", "/register"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
