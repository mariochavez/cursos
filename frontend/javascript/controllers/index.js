import { application } from "./application"

import ThisPageController from "./this_page_controller"
application.register("this-page", ThisPageController)

import QuickLinksController from "./quick_links_controller"
application.register("quick-links", QuickLinksController)

import MobileMenuController from "./mobile_menu_controller"
application.register("mobile-menu", MobileMenuController)
