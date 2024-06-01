import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';


export default function MultiSelectRadioGroup() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (value: string) => {
    setSelectedInterests((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const interests = [
    { value: 'technology', label: 'Technology', description: 'Software, hardware, AI, and more.', Icon: CodeIcon },
    { value: 'design', label: 'Design', description: 'UI, UX, graphic design, and more.', Icon: }BrushIcon },
    { value: 'business', label: 'Business', description: 'Entrepreneurship, finance, marketing, and more.', Icon: BriefcaseIcon },
    { value: 'lifestyle', label: 'Lifestyle', description: 'Health, fitness, travel, and more.', Icon: ApertureIcon },
  ];

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">Select your interests</CardTitle>
          <SparklesIcon className="h-6 w-6 text-primary" />
        </div>
        <CardDescription>Choose the topics you're most interested in.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {interests.map((interest) => (
            <Label
              key={interest.value}
              htmlFor={interest.value}
              className={`flex items-center justify-between rounded-md border p-4 hover:bg-gray-50 ${
                selectedInterests.includes(interest.value) ? 'border-gray-900 bg-gray-50' : 'border-gray-200 bg-white'
              }`}
              onClick={() => toggleInterest(interest.value)}
            >
              <div className="flex items-center gap-4">
                <RadioGroupItem value={interest.value} id={interest.value} className="peer sr-only" />
                
                <div>
                  <div className="font-medium">{interest.label}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{interest.description}</p>
                </div>
              </div>
              
            </Label>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button type="button" onClick={() => console.log('Selected interests:', selectedInterests)}>
          Save Interests
        </Button>
      </CardFooter>
    </Card>
  );
}
