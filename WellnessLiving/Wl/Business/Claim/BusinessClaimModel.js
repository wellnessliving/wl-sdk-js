/**
 * Checks if the email or phone number has already been used for a trial account or not.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Claim_BusinessClaimModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The Self-Setup wizard form data to be saved in the business claim log.
   *
   * The structure is conditionally arbitrary and is used only for logging purposes.
   * No specific keys are required or validated.
   *
   * @put post
   * @type {string[]}
   */
  this.a_form = undefined;

  /**
   * The key of the business to be verified.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the location to be verified.
   *
   * @post post
   * @type {string}
   */
  this.k_location = "";

  /**
   * The email address of the location.
   *
   * Urlencoded email address is expected.
   *
   * @get get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * The phone number of the business, staff and location.
   *
   * Urlencoded phone number is expected.
   *
   * @get get
   * @type {string}
   */
  this.text_phone = "";

  /**
   * The key of the user who verified the business.
   *
   * @post post
   * @type {string}
   */
  this.uid_verified = "";

  /**
   * Location microsite URL.
   *
   * @post result
   * @type {?string}
   */
  this.url_microsite = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Claim_BusinessClaimModel);

/**
 * @inheritDoc
 */
Wl_Business_Claim_BusinessClaimModel.prototype.config=function()
{
  return {"a_field":{"a_form":{"put":{"post":true}},"k_business":{"post":{"post":true},"put":{"post":true}},"k_location":{"post":{"post":true}},"text_mail":{"get":{"get":true}},"text_phone":{"get":{"get":true}},"uid_verified":{"post":{"post":true}},"url_microsite":{"post":{"result":true}}}};
};

/**
 * Checks if the email or phone number has already been used for a trial account or not.
 *
 * Called during the self-onboarding flow before creating a new business to detect duplicate registrations
 * early. Checks across all data center regions. Rate-limited per IP to prevent abuse.
 *
 * @function
 * @name Wl_Business_Claim_BusinessClaimModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Completes the verification process of the trial business.
 *
 * Used by WellnessLiving staff to confirm a new trial business after reviewing the signup. Marks the
 * business as verified by the approving user. Returns the location microsite URL so the staff member
 * can share it with the new client.
 *
 * @function
 * @name Wl_Business_Claim_BusinessClaimModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Saves the Self-Setup wizard form data in the business claim log.
 *
 * Called at the end of the Self-Setup wizard to store the wizard input for internal auditing. Can only
 * be called once per business after it has been claimed.
 *
 * @function
 * @name Wl_Business_Claim_BusinessClaimModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
