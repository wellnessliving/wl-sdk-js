/**
 * Deletes family relation between 2 users.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Family_Relation_Relation72Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,id_flow";

  /**
   * @typedef {{}} Wl_Family_Relation_Relation72Model_a_new
   * @property {number} id_family_relation Relation type between two relatives.
   * @property {string} uid The related user's key.
   */

  /**
   * The new relationship to be added to user, specified with [RelationApi](/Wl/Family/Relation/Relation.json):
   *
   * @post post
   * @type {Wl_Family_Relation_Relation72Model_a_new}
   */
  this.a_new = undefined;

  /**
   * @typedef {{}} Wl_Family_Relation_Relation72Model_a_relation
   * @property {number} id_family_relation Relation type between two relatives.
   * @property {number} id_family_relation_reverse Relation type between two relatives.
   * @property {string} text_name The name of the relation.
   * @property {string} text_name_first The first name of the relation.
   * @property {string} uid The key of the related user.
   */

  /**
   * Information about the user's relationships. Every element has the following fields:
   *
   * @delete result
   * @get result
   * @post result
   * @type {Wl_Family_Relation_Relation72Model_a_relation[]}
   */
  this.a_relation = undefined;

  /**
   * ID of the user behavior flow.
   * One of {@link Wl_User_Tracking_FlowSid} constants.
   *
   * @delete get
   * @get get
   * @post get
   * @see Wl_User_Tracking_FlowSid
   * @type {number}
   */
  this.id_flow = 0;

  /**
   * The source of a visit.
   *
   * Last used ID: 30.
   *
   * Values:
   * - 28 (`API`): Action made via Api Endpoint. Default for leads created via API, unless overridden.
   * - 21 (`AZURE`): Registered through `Azure`.
   * - 23 (`CENTRED`): Visit has been created by `CENTRED`.
   * - 8 (`CLASSPASS_BOOKING`): Visit has been created by `ClassPass`.
   * - 22 (`COLLECTIONS`): Debt paid via collections.
   * - 26 (`COLLECTIONS_FUTURE`): Debt paid via collections.
   * - 27 (`CONCERTO`): Action from Concerto.
   * - 18 (`EMAIL`): Action made via email.
   * - 20 (`FACEBOOK`): Indicating that the source is Facebook.
   * - 30 (`GO_HIGH_LEVEL`): Action from Go High Level.
   * - 19 (`GOOGLE`): Indicating that the source is Google.
   * - 7 (`GOOGLE_BOOKING`): Visit has been created by Google Booking Service.
   * - 14 (`GYMPASS_BOOKING`): Visit has been created by `GymPass`.
   * - 5 (`IMPORT`): Visit was created during import.
   * - 12 (`MICROSITE`): Action made via microsite.
   *
   *   It is also names as directory listing.
   * - 24 (`MICROSOFT`): Indicating that the source is Microsoft.
   * - 13 (`MY_PRESENCE_SITE`): Client booked session on My Presence Site.
   * - 17 (`SMS`): Action made via SMS.
   * - 4 (`SPA_BACKEND`): Staff booked session from spa backend.
   * - 3 (`SPA_FRONTEND`): Client booked session from spa frontend.
   * - 10 (`SYSTEM`): Created by system.
   * - 6 (`UNDEFINED`): Means that we did not define mode.
   * - 16 (`WEB_APP_ATTENDANCE`): Client booked session from Attendance Web App.
   * - 15 (`WEB_APP_CHECK_IN`): Client checked-in for the session through Check-In Web App.
   * - 2 (`WEB_BACKEND`): Staff booked session for client from website backend.
   * - 1 (`WEB_FRONTEND`): Client booked session from website frontend.
   * - 11 (`WIDGET`): Action made via widget (purchase, book etc).
   * - 25 (`ZAPIER`): Action from Zapier.
   *
   * @delete post
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The business key.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the user whose relationships are being assessed.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  /**
   * The key of the related user who [RelationApi](/Wl/Family/Relation/Relation.json) must be removed.
   *
   * @delete get
   * @type {string}
   */
  this.uid_delete = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Family_Relation_Relation72Model);

/**
 * @inheritDoc
 */
Wl_Family_Relation_Relation72Model.prototype.config=function()
{
  return {"a_field":{"a_new":{"post":{"post":true}},"a_relation":{"delete":{"result":true},"get":{"result":true},"post":{"result":true}},"id_flow":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"id_mode":{"delete":{"post":true},"post":{"post":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"uid":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"uid_delete":{"delete":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Family_Relation_Relation72Model.instanceGet
 * @param {string} uid The key of the user whose relationships are being assessed.
 * @param {string} k_business The business key.
 * @param {number} id_flow ID of the user behavior flow. One of {@link Wl_User_Tracking_FlowSid} constants.
 * @returns {Wl_Family_Relation_Relation72Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Deletes family relation between 2 users.
 *
 * Removes the relationship between the user identified by `uid` and the user identified by `uid_delete`
 * within the given business, then returns the updated list of relationships for `uid`.
 *
 * @function
 * @name Wl_Family_Relation_Relation72Model.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Gets relative list.
 *
 * Returns the list of all family relationships for the specified user within the given business, including
 * relationship type, reverse relationship type, name, and photo information for each related user.
 *
 * @function
 * @name Wl_Family_Relation_Relation72Model.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Adds to user [RelationApi](/Wl/Family/Relation/Relation.json)
relative [RelationApi](/Wl/Family/Relation/Relation.json).
 *
 * Creates a bidirectional family relationship between the user identified by `uid` and the user specified in
 * `a_new`, then returns the updated list of relationships for `uid`.
 *
 * @function
 * @name Wl_Family_Relation_Relation72Model.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
