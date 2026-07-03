/**
 * Returns information about settings for Check In Web Application.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reception_Design_ReceptionDesignModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location";

  /**
   * @typedef {{}} Wl_Reception_Design_ReceptionDesignModel_a_reception_logo
   * @property {string} url_thumbnail url for thumbnail version of image.
   * @property {string} url_view url for full image.
   */

  /**
   * Array of image information for Self Check-In logo.
   * Empty if [ReceptionDesignApi](/Wl/Reception/Design/ReceptionDesign.json) is not provided.
   *
   * Will contain the following keys:
   *
   *
   * If image for self check in app is empty, will attempt to obtain business logo instead. If business logo is empty,
   * will attempt to obtain location logo.
   *
   * @get result
   * @type {Wl_Reception_Design_ReceptionDesignModel_a_reception_logo[]}
   */
  this.a_reception_logo = undefined;

  /**
   * `true` - client profile images will be hidden after the client signs in on the Check-in Kiosk;
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.hide_profile_images = undefined;

  /**
   * Number of minutes for the client check-in window after session has started.
   *
   * @get result
   * @type {number}
   */
  this.i_book_open = undefined;

  /**
   * Delay in seconds on Check-in Confirmation Screen before redirect to Login screen.
   *
   * @get result
   * @type {number}
   */
  this.i_confirm_delay = undefined;

  /**
   * Delay in seconds on Schedule Screen before redirect to Login screen.
   *
   * @get result
   * @type {number}
   */
  this.i_schedule_delay = undefined;

  /**
   * List of sounds used for check ins.
   *
   * Last used ID: 6.
   *
   * Values:
   * - 1 (`ERROR_SOUND_1`): Error sound 1 to be played when self check in fails.
   * - 2 (`ERROR_SOUND_2`): Error sound 2 to be played when self check in fails.
   * - 3 (`ERROR_SOUND_3`): Error sound 3 to be played when self check in fails.
   * - 4 (`SUCCESS_SOUND_1`): Success sound 1 to be played when self check in succeeds.
   * - 5 (`SUCCESS_SOUND_2`): Success sound 2 to be played when self check in succeeds.
   * - 6 (`SUCCESS_SOUND_3`): Success sound 3 to be played when self check in succeeds.
   *
   * @get result
   * @type {number}
   */
  this.id_failed_sound = undefined;

  /**
   * List of sounds used for check ins.
   *
   * Last used ID: 6.
   *
   * Values:
   * - 1 (`ERROR_SOUND_1`): Error sound 1 to be played when self check in fails.
   * - 2 (`ERROR_SOUND_2`): Error sound 2 to be played when self check in fails.
   * - 3 (`ERROR_SOUND_3`): Error sound 3 to be played when self check in fails.
   * - 4 (`SUCCESS_SOUND_1`): Success sound 1 to be played when self check in succeeds.
   * - 5 (`SUCCESS_SOUND_2`): Success sound 2 to be played when self check in succeeds.
   * - 6 (`SUCCESS_SOUND_3`): Success sound 3 to be played when self check in succeeds.
   *
   * @get result
   * @type {number}
   */
  this.id_success_sound = undefined;

  /**
   * `true` - allow client to check-in unpaid;
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_attend_free = undefined;

  /**
   * If only one service available with the look ahead window the client will:
   * `true` - automatically check in to it; `false` - have to select the service.
   *
   * @get result
   * @type {boolean}
   */
  this.is_auto_check_in = undefined;

  /**
   * `true` - allow clients to check-in to sessions in progress;
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_book_open = undefined;

  /**
   * `true` - allow client check-in without booking prior;
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_book_optional = undefined;

  /**
   * `true` - enable check-in by client id;
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_client_id = undefined;

  /**
   * `true` - enable check-in by email;
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_mail = undefined;

  /**
   * `true` - require password while check-in;
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_password = undefined;

  /**
   * `true` - enable check-in by phone;
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_phone = undefined;

  /**
   * `true` - automatically reconcile unpaid visits upon check in;
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_reconcile_auto = undefined;

  /**
   * Key of the business, where application is run.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the location, where application is run.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * `true` - show business name on client self check-in page;
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.show_business_name = undefined;

  /**
   * `true` - show confirm screen after client self check-in;
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.show_confirm_screen = undefined;

  /**
   * Name of the business to display on the client self check-in page.
   *
   * @get result
   * @type {string}
   */
  this.text_business_name = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Design_ReceptionDesignModel);

/**
 * @inheritDoc
 */
Wl_Reception_Design_ReceptionDesignModel.prototype.config=function()
{
  return {"a_field":{"a_reception_logo":{"get":{"result":true}},"hide_profile_images":{"get":{"result":true}},"i_book_open":{"get":{"result":true}},"i_confirm_delay":{"get":{"result":true}},"i_schedule_delay":{"get":{"result":true}},"id_failed_sound":{"get":{"result":true}},"id_success_sound":{"get":{"result":true}},"is_attend_free":{"get":{"result":true}},"is_auto_check_in":{"get":{"result":true}},"is_book_open":{"get":{"result":true}},"is_book_optional":{"get":{"result":true}},"is_client_id":{"get":{"result":true}},"is_mail":{"get":{"result":true}},"is_password":{"get":{"result":true}},"is_phone":{"get":{"result":true}},"is_reconcile_auto":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"show_business_name":{"get":{"result":true}},"show_confirm_screen":{"get":{"result":true}},"text_business_name":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Reception_Design_ReceptionDesignModel.instanceGet
 * @param {string} k_business Key of the business, where application is run.
 * @param {string} k_location Key of the location, where application is run.
 * @returns {Wl_Reception_Design_ReceptionDesignModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns information about settings for Check In Web Application.
 *
 * This method does not require any access checks, because this is public information.
 *
 * @function
 * @name Wl_Reception_Design_ReceptionDesignModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
