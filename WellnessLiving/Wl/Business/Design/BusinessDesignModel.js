/**
 * API method to get business design data.
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
   * @property {boolean} hide_past_days Clients only see today's and upcoming sessions.
   * @property {number} id_layout Layout ID. For more details, see {@link RsPageFrontendHeaderLayoutSid}.
   * @property {number} id_logo_position Logo position ID. For more details, see {@link RsBusinessDesignLogoPositionSid}.
   * @property {number} id_logo_style Logo style ID. For more details, see {@link RsBusinessDesignLogoStyleSid}.
   * @property {boolean} is_appointment_capacity If `true` the capacity and number of clients signed up to the appointment will be shown.
   * @property {boolean} is_attend_self If `true` clients can check-in using the Client Web App and Achieve Web App.
   * @property {boolean} is_class_capacity If `true` the capacity and number of clients signed up to the class will be shown.
   * @property {boolean} is_class_quick If `true`, the quick class filter will be shown.
   * @property {boolean} is_class_spot_only `true` to display only available spots (e.g., "3 spots left");  `false` to display both available spots and total capacity (e.g., "3 spots left of 10").
   * @property {boolean} is_show_name If `true`, the business name will be shown.
   * @property {string} s_color_background Background color of frontend.
   * @property {string} s_color_header Header color of frontend menu.
   * @property {string} s_color_menu_border Border color of frontend menu.
   * @property {string} s_color_menu_element Menu element color
   * @property {string} s_color_menu_hover Hover colour of front end menu.
   * @property {string} s_color_menu_hover_background Background hover color of front end menu.
   * @property {string} s_color_menu_press Press colour of front end menu.
   * @property {string} s_color_submenu Submenu colour of front end menu.
   * @property {string} s_color_submenu_element Submenu element color of front end menu.
   * @property {string} s_color_submenu_hover Hover color of submenu of front end menu
   * @property {string} s_color_submenu_press Press color of submenu in front end menu.
   * @property {string} s_fb_pixel_id Facebook Pixel ID. Used for Facebook analytics tracking. Empty string if tracking is disabled.
   * @property {string} s_ga_tracking_id Google Analytics Tracking ID. Used for Google Analytics tracking. Empty string if tracking is disabled.
   * @property {string} s_gtm_container_id Google Tag Manager Container ID. Used for Google Analytics tracking. Empty string if tracking is disabled.
   * @property {string} s_url_background Path to the background image.
   */

  /**
   * Design data for a business.
   *
   * Contains the following keys:
   *
   * @get result
   * @type {Wl_Business_Design_BusinessDesignModel_a_data}
   */
  this.a_data = undefined;

  /**
   * Business key to get design data.
   *
   * May be `null`. In this case default business design data is returned.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Design_BusinessDesignModel);

/**
 * @inheritDoc
 */
Wl_Business_Design_BusinessDesignModel.prototype.config=function()
{
  return {"a_field":{"a_data":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Business_Design_BusinessDesignModel.instanceGet
 * @param {string} k_business Business key to get design data. May be `null`. In this case default business design data is returned.
 * @returns {Wl_Business_Design_BusinessDesignModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * API method to get business design data.
 *
 * Used to render the client-facing schedule and booking widget with the business's custom branding.
 * Returns the color theme, header layout, logo style, capacity display preferences, and analytics
 * tracking IDs (Google Analytics, Google Tag Manager, Facebook Pixel). Pass no business key to get
 * the system default design.
 *
 * @function
 * @name Wl_Business_Design_BusinessDesignModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
