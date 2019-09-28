package com.example.androidstarter;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;
import android.widget.Toast;

public class ActivityStarter extends AppCompatActivity {

    TextView text = findViewById(R.id.textView2);

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_starter);

        Intent intent = getIntent();
        //String name = intent.getStringExtra("name");

        text.setText("mansoor");

        //Toast.makeText(ActivityStarter.this, name, Toast.LENGTH_SHORT).show();

    }
}
