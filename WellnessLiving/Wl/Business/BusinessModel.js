/**
 * Creates new business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_BusinessModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Business_BusinessModel_a_staff_member
   * @property {boolean} is_enter Should created staff member be automatically signed in or not.
   * @property {string} text_mail Email address to be used to sign in.
   * @property {string} text_name_first The first name of the staff member.
   * @property {string} text_name_last The last name of the staff member.
   */

  /**
   * Empty array means to not create a staff member.
   * Otherwise, information about staff member to be created in the business.
   *
   * @post post
   * @put post
   * @type {Wl_Business_BusinessModel_a_staff_member}
   */
  this.a_staff_member = undefined;

  /**
   * The business locale.
   *
   * @post post
   * @see Core_Locale_LocaleSid
   * @type {number}
   */
  this.id_locale = 0;

  /**
   * `true` if location should be also created for the business.
   * `false` if otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_location_create = false;

  /**
   * `true` to send {@link RsMailSid} mail when creating a staff member.
   * Otherwise send {@link RsMailSid} mail.
   *
   * @post post
   * @put post
   * @type {boolean}
   */
  this.is_mail_send = false;

  /**
   * The key of the business.
   *
   * When using `post()` returned key of the created business.
   * When using `put()` used for update business.
   *
   * @post result
   * @put post,result
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the business type.
   *
   * @post post
   * @type {string}
   */
  this.k_business_type = "";

  /**
   * The key of the location for update or after creating.
   * `null` if location is not created.
   *
   * @post result
   * @put post,result
   * @type {?string}
   */
  this.k_location = null;

  /**
   * The city key of the business.
   * Optional.
   *
   * @post post
   * @type {string}
   */
  this.k_office_city = "";

  /**
   * Microsoft Clarity session ID associated with the business claim session.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.s_clarity_session_id = "";

  /**
   * The email address of the location.
   * Optional.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.text_mail = "";

  /**
   * The address of the business.
   * Optional.
   *
   * @post post
   * @type {string}
   */
  this.text_office_address = "";

  /**
   * The postal code of the business.
   * Optional.
   *
   * @post post
   * @type {string}
   */
  this.text_office_postal = "";

  /**
   * The phone number of the business, staff and location.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.text_phone = "";

  /**
   * The title of the business.
   *
   * @post post
   * @type {string}
   */
  this.text_title = "";

  /**
   * The UID of the created staff member or `null` if no staff member should be created.
   *
   * @post result
   * @put result
   * @type {?string}
   */
  this.uid = null;

  /**
   * Url for password change page.
   *
   * Filled only when creating staff member, otherwise `null`.
   *
   * @post result
   * @put result
   * @type {?string}
   */
  this.url_password_change = null;

  /**
   * The URL of the business website.
   * Optional.
   *
   * @post post
   * @type {string}
   */
  this.url_site = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_BusinessModel);

/**
 * @inheritDoc
 */
Wl_Business_BusinessModel.prototype.config=function()
{
  return {"a_field":{"a_staff_member":{"post":{"post":true},"put":{"post":true}},"id_locale":{"post":{"post":true}},"is_location_create":{"post":{"post":true}},"is_mail_send":{"post":{"post":true},"put":{"post":true}},"k_business":{"post":{"result":true},"put":{"post":true,"result":true}},"k_business_type":{"post":{"post":true}},"k_location":{"post":{"result":true},"put":{"post":true,"result":true}},"k_office_city":{"post":{"post":true}},"s_clarity_session_id":{"post":{"post":true},"put":{"post":true}},"text_mail":{"post":{"post":true},"put":{"post":true}},"text_office_address":{"post":{"post":true}},"text_office_postal":{"post":{"post":true}},"text_phone":{"post":{"post":true},"put":{"post":true}},"text_title":{"post":{"post":true}},"uid":{"post":{"result":true},"put":{"result":true}},"url_password_change":{"post":{"result":true},"put":{"result":true}},"url_site":{"post":{"post":true}}}};
};

/**
 * Creates new business.
 *
 * Used during the self-onboarding flow when a new client signs up for WellnessLiving. Creates the business
 * with its default integrations, optional first location, default service categories, and an optional owner
 * staff account - all in a single transaction. Rate-limited per IP and globally to prevent abuse.
 *
 * @function
 * @name Wl_Business_BusinessModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Claims business.
 *
 * Used when a prospective client claims an existing unclaimed business record during onboarding.
 * Activates trial features, updates the location contact details, and optionally creates an owner
 * staff account. The business must not already be claimed and the location must belong to it.
 *
 * @function
 * @name Wl_Business_BusinessModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
