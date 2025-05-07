import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
  isAuthenticatedNexjs, 

} from "@convex-dev/auth/nextjs/server";

const isPublicPage = createRouteMatcher(["/signin"]);
 
export default convexAuthNextjsMiddleware((request: any) => {
  if (!isPublicPage(request) && isAuthenticatedNexjs()) {
    return nextjsMiddlewareRedirect(request, "/signin");
  }
});
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};