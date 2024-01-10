<?php

namespace Database\Seeders;

use App\Models\Legal_form;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Legal_formsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $legalForms = [
            ['legal_form' => 'Sociedad Anónima'],
            ['legal_form' => 'Sociedad Limitada'],
            ['legal_form' => 'Sociedad por Acciones Simplificada (SAS)'],
            ['legal_form' => 'Sociedad de Responsabilidad Limitada (SRL)'],
            ['legal_form' => 'Sucursal de Empresa Extranjera'],
            ['legal_form' => 'Asociación'],
            ['legal_form' => 'Fundación'],
            ['legal_form' => 'Cooperativa'],
            // Agrega más formas jurídicas según sea necesario
        ];

        foreach ($legalForms as $form) {
            Legal_form::create($form);
        }
    }
}
