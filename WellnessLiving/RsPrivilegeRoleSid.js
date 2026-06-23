/**
 * String identifiers for rs.privilege.role.
 *
 * Do not reorder class constants. It is important during selecting all system roles and custom roles from database.
 */
function RsPrivilegeRoleSid()
{
  // Empty constructor.
}

/**
 * Staff role business owner.
 *
 * @type {number}
 */
RsPrivilegeRoleSid.BUSINESS_OWNER = 1;

/**
 * Staff role front desk.
 *
 * @type {number}
 */
RsPrivilegeRoleSid.FRONT_DESK = 4;

/**
 * Staff role instructor.
 *
 * @type {number}
 */
RsPrivilegeRoleSid.INSTRUCTOR = 3;

/**
 * Staff role location owner.
 *
 * @type {number}
 */
RsPrivilegeRoleSid.LOCATION_OWNER = 2;
