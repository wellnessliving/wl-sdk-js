/**
 * An endpoint that manipulates business design data.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Design_BusinessDesignModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Business_Design_BusinessDesignModel_a_data
   * @property {bool} hide_past_days Clients only see today’s and upcoming sessions.
   * @property {int} id_layout Layout ID. See more: {@link Wl_Business_Design_RsPageFrontendHeaderLayoutSid}.
   * @property {int} id_logo_position Logo position ID. See more: {@link Wl_Business_Design_RsBusinessDesignLogoPositionSid}.
   * @property {int} id_logo_style Logo style ID. See more: {@link Wl_Business_Design_RsBusinessDesignLogoStyleSid}.
   * @property {bool} is_appointment_capacity If `true` the capacity and number of clients signed up to the appointment will be shown.
   * @property {bool} is_attend_self If `true` clients can check-in using the Client Web App and Achieve Web App.
   * @property {bool} is_class_capacity If `true` the capacity and number of clients signed up will be shown.
   * @property {bool} is_class_quick If `true` quick class filter will be show.
   * @property {bool} is_class_spot_only If `true` to display only available spots (e.g., "3 spots left"); if `false` to display both available spots and total capacity (e.g., "3 spots left of 10").
   * @property {bool} is_fb_capi_access_token Whether Meta Conversion API Access Token is set.
   * @property {bool} is_show_name If `true` business name will be show.
   * @property {string} s_color_background Background color of frontend.
   * @property {string} s_color_header Header color of frontend menu.
   * @property {string} s_color_menu_border Border color of frontend menu.
   * @property {string} s_color_menu_element Menu element color.
   * @property {string} s_color_menu_hover Hover colour of front end menu.
   * @property {string} s_color_menu_hover_background Background hover color of front end menu.
   * @property {string} s_color_menu_press Press colour of front end menu.
   * @property {string} s_color_submenu Submenu colour of front end menu.
   * @property {string} s_color_submenu_element Submenu element color of front end menu.
   * @property {string} s_color_submenu_hover Hover color of submenu of front end menu
   * @property {string} s_color_submenu_press Press color of submenu in front end menu.
   * @property {string} s_fb_capi_access_token Meta Conversion API Access Token. Empty string if CAPI not used or application that made request does not have access to it.
   * @property {string} s_fb_capi_test_event_code Meta Conversion API Test Event Code. Optional, used for QA in Meta Events Manager. Empty string if not used or application that made request does not have access to it.
   * @property {string} s_fb_pixel_id Meta Pixel ID. Used for Meta analytics tracking. Empty string if tracking is disabled.
   * @property {string} s_ga_tracking_id Google Analytics Tracking ID. Used for Google Analytics tracking. Empty string if tracking is disabled.
   * @property {string} s_gtm_container_id Google Tag Manager Container ID. Used for Google Analytics tracking. Empty string if tracking is disabled.
   * @property {string} s_url_background Path to the background image.
   */

  /**
   * The business design data.
   *
   * @get result
   * @type {Wl_Business_Design_BusinessDesignModel_a_data}
   */
  this.a_data = undefined;

  /**
   * The business key used to get business design data.
   *
   * If `null`, the default business design data is returned.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Design_BusinessDesignModel);

/**
 * @inheritDoc
 */
Wl_Business_Design_BusinessDesignModel.prototype.config=function()
{
  return {"a_field": {"a_data": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Business_Design_BusinessDesignModel.instanceGet
 * @param {string} k_business The business key used to get business design data. If `null`, the default business design
 * data is returned.
 * @returns {Wl_Business_Design_BusinessDesignModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */