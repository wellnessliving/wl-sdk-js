/**
 * System-defined lead stages.
 *
 * Every business has one stage of each type by default. 
 *
 * Custom stages created by a business have no system ID.
 *
 * Last used ID: 6.
 */
function Wl_Lead_Stage_LeadStageSystemSid()
{
  // Empty constructor.
}

/**
 * A lead which was contacted by a staff member.
 *
 * @type {number}
 */
Wl_Lead_Stage_LeadStageSystemSid.CONTACTED = 6;

/**
 * A lead which is being actively worked with and is close to a purchase.
 *
 * @type {number}
 */
Wl_Lead_Stage_LeadStageSystemSid.HOT = 2;

/**
 * A lead which was lost.
 *
 * @type {number}
 */
Wl_Lead_Stage_LeadStageSystemSid.LOST = 5;

/**
 * A newly captured lead. This stage is set to a client when they are added as a lead.
 *
 * @type {number}
 */
Wl_Lead_Stage_LeadStageSystemSid.NEW = 1;

/**
 * A lead which has shown some interest, but is not ready to purchase yet.
 *
 * @type {number}
 */
Wl_Lead_Stage_LeadStageSystemSid.WARM = 3;

/**
 * A lead which was successfully converted into a client.
 *
 * @type {number}
 */
Wl_Lead_Stage_LeadStageSystemSid.WON = 4;
