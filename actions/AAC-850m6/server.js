function(properties, context) {

	const initial_date = new Date(properties.initial_date); // Create a new Date object from the input to avoid modifying the original
	const business_days = properties.business_days;
	let days_accounted_for = 0;
	let current_date = new Date(initial_date); // Start with the initial date

	// If business_days is 0 or less, the delivery date is the initial date
	if (business_days <= 0) {
		return {
			final_date: initial_date
		};
	}

	// Loop until we have accounted for the required number of business days
	while (days_accounted_for < business_days) {
		// Move to the next day
		current_date.setDate(current_date.getDate() + 1);

		// Check if the current day is a weekday (Monday to Friday)
		// getDay() returns 0 for Sunday, 6 for Saturday
		if (current_date.getDay() !== 0 && current_date.getDay() !== 6) {
			// If it's a weekday, count it
			days_accounted_for = days_accounted_for + 1;
		}
		// If it's a weekend, we just skip counting it and move to the next day in the next loop iteration
	}

	// Once the loop finishes, current_date holds the final date after adding business days
	const delivery_date = current_date;

	return {
		final_date: delivery_date
	};
}