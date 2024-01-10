<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $countries = [
            ['country_name' => 'Afghanistan', 'country_code' => 'AF'],
            ['country_name' => 'Albania', 'country_code' => 'AL'],
            ['country_name' => 'Algeria', 'country_code' => 'DZ'],
            ['country_name' => 'Andorra', 'country_code' => 'AD'],
            ['country_name' => 'Angola', 'country_code' => 'AO'],
            ['country_name' => 'Antigua and Barbuda', 'country_code' => 'AG'],
            ['country_name' => 'Argentina', 'country_code' => 'AR'],
            ['country_name' => 'Armenia', 'country_code' => 'AM'],
            ['country_name' => 'Australia', 'country_code' => 'AU'],
            ['country_name' => 'Austria', 'country_code' => 'AT'],
            ['country_name' => 'Azerbaijan', 'country_code' => 'AZ'],
            ['country_name' => 'Bahamas', 'country_code' => 'BS'],
            ['country_name' => 'Bahrain', 'country_code' => 'BH'],
            ['country_name' => 'Bangladesh', 'country_code' => 'BD'],
            ['country_name' => 'Barbados', 'country_code' => 'BB'],
            ['country_name' => 'Belarus', 'country_code' => 'BY'],
            ['country_name' => 'Belgium', 'country_code' => 'BE'],
            ['country_name' => 'Belize', 'country_code' => 'BZ'],
            ['country_name' => 'Benin', 'country_code' => 'BJ'],
            ['country_name' => 'Bhutan', 'country_code' => 'BT'],
            ['country_name' => 'Bolivia', 'country_code' => 'BO'],
            ['country_name' => 'Bosnia and Herzegovina', 'country_code' => 'BA'],
            ['country_name' => 'Botswana', 'country_code' => 'BW'],
            ['country_name' => 'Brazil', 'country_code' => 'BR'],
            ['country_name' => 'Brunei', 'country_code' => 'BN'],
            ['country_name' => 'Bulgaria', 'country_code' => 'BG'],
            ['country_name' => 'Burkina Faso', 'country_code' => 'BF'],
            ['country_name' => 'Burundi', 'country_code' => 'BI'],
            ['country_name' => 'Cabo Verde', 'country_code' => 'CV'],
            ['country_name' => 'Cambodia', 'country_code' => 'KH'],
            ['country_name' => 'Cameroon', 'country_code' => 'CM'],
            ['country_name' => 'Canada', 'country_code' => 'CA'],
            ['country_name' => 'Central African Republic', 'country_code' => 'CF'],
            ['country_name' => 'Chad', 'country_code' => 'TD'],
            ['country_name' => 'Chile', 'country_code' => 'CL'],
            ['country_name' => 'China', 'country_code' => 'CN'],
            ['country_name' => 'Colombia', 'country_code' => 'CO'],
            ['country_name' => 'Comoros', 'country_code' => 'KM'],
            ['country_name' => 'Congo (Congo-Brazzaville)', 'country_code' => 'CG'],
            ['country_name' => 'Costa Rica', 'country_code' => 'CR'],
            ['country_name' => 'Cote d\'Ivoire', 'country_code' => 'CI'],
            ['country_name' => 'Croatia', 'country_code' => 'HR'],
            ['country_name' => 'Cuba', 'country_code' => 'CU'],
            ['country_name' => 'Cyprus', 'country_code' => 'CY'],
            ['country_name' => 'Czechia (Czech Republic)', 'country_code' => 'CZ'],
            ['country_name' => 'Denmark', 'country_code' => 'DK'],
            ['country_name' => 'Djibouti', 'country_code' => 'DJ'],
            ['country_name' => 'Dominica', 'country_code' => 'DM'],
            ['country_name' => 'Dominican Republic', 'country_code' => 'DO'],
        ];

        foreach ($countries as $countryData) {
            Country::create($countryData);
        }
    }
}
