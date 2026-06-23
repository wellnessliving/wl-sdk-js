/**
 * Returns partner settings for the business identified by the given partner code.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Partner_PartnerSettingsModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of different types for landing pages based on business types.
   *
   * Last ID: 33
   *
   * Values:
   * - 26 (`BARBERSHOP`): Barbershops.
   * - 24 (`BOOTCAMP`): Boot camps.
   * - 25 (`BOXING`): Boxing studios.
   * - 21 (`BUSINESS_MANAGEMENT`): Special industry free landing page with only contact us form.
   * - 10 (`CLUB`): Health clubs.
   * - 9 (`CROSSFIT`): Affiliate Gym.
   * - 11 (`DANCE`): Dance studios.
   * - 14 (`DENTAL`): Dental studios.
   * - 6 (`FITNESS`): Fitness gyms.
   * - 29 (`FUNCTIONAL_FITNESS`): Functional fitness also known as functional training or functional movement.
   * - 22 (`GYM`): Fitness gyms.
   * - 23 (`HEALTH_CLUB`): Health clubs.
   * - 30 (`INTEGRATIVE_HEALTH_CENTER`): Health and beauty salons at one place.
   * - 8 (`MARTIAL_ART`): Martial arts.
   * - 4 (`MASSAGE`): Massage salons.
   * - 28 (`MEDICAL_SPA`): Massage salons.
   * - 15 (`MEDICINE_ALTERNATIVE`): Alternative medical offices.
   * - 13 (`MEDICINE_TRADITIONAL`): Hospitals and private doctors.
   * - 19 (`MUSIC`): Music schools.
   * - 5 (`PERSONAL_TRAINING`): Personal trainings.
   * - 7 (`PILATES`): Pilates.
   * - 32 (`PLAY_CAFE`): Play cafes.
   * - 18 (`POLE_DANCING`): Pole dancing studios.
   * - 3 (`SALON`): Salons.
   * - 2 (`SPA`): Spa salons.
   * - 17 (`SPINNING`): Spinning.
   * - 33 (`SWIM_SCHOOL`): Swim schools
   * - 31 (`TATTOO`): Tattoo salons.
   * - 12 (`TOUR`): Tours and events.
   * - 20 (`WELLNESS_CENTER`): Wellness Centers
   * - 1 (`YOGA`): Yoga.
   * - 27 (`ZUMBA`): Zumba.
   *
   * @get result
   * @type {?number}
   */
  this.id_business_tour = null;

  /**
   * The business key.
   *
   * @get result
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The unique code that a business can provide other businesses to tell them about system.
   *
   * @get get
   * @type {string}
   */
  this.text_code = "";

  /**
   * The first name of the business representative.
   *
   * @get result
   * @type {string}
   */
  this.text_name_first = undefined;

  /**
   * The last name of the business representative.
   *
   * @get result
   * @type {string}
   */
  this.text_name_last = undefined;

  /**
   * The job title of the business representative.
   *
   * @get result
   * @type {string}
   */
  this.text_position = undefined;

  /**
   * The text of the review about the WellnessLiving system.
   *
   * @get result
   * @type {string}
   */
  this.text_review = undefined;

  /**
   * A link to the photo of the business representative.
   *
   * `null` in case when image is not uploaded.
   *
   * @get result
   * @type {?string}
   */
  this.url_photo = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Partner_PartnerSettingsModel);

/**
 * @inheritDoc
 */
Wl_Business_Partner_PartnerSettingsModel.prototype.config=function()
{
  return {"a_field":{"id_business_tour":{"get":{"result":true}},"k_business":{"get":{"result":true}},"text_code":{"get":{"get":true}},"text_name_first":{"get":{"result":true}},"text_name_last":{"get":{"result":true}},"text_position":{"get":{"result":true}},"text_review":{"get":{"result":true}},"url_photo":{"get":{"result":true}}}};
};

/**
 * Returns partner settings for the business identified by the given partner code.
 *
 * Used when rendering the Partner Program landing page. Resolves the partner code to a business and
 * returns the business key and the home tour type so the landing page can show the appropriate demo
 * tour. A daily failed-request limit per IP prevents brute-force enumeration of partner codes.
 *
 * @function
 * @name Wl_Business_Partner_PartnerSettingsModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
